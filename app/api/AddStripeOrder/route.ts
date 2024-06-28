
import { ProductProps } from "@/types";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { connectToDb } from "@/db";
import { Cart } from "@/schemas/cartModel";
import User from "@/schemas/userModel";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: Request) {
    try {
        await connectToDb(); // Ensure the database is connected

        const { referenceId , clerkId } = await req.json();

        // Retrieve cart details from MongoDB using the reference ID
        const cart = await Cart.findOne({ referenceId });
        const user = await User.findOne({clerkId: clerkId})
        
        if (!cart) {
            return NextResponse.json({ error: "Cart not found" }, { status: 404 });
        }

        const { cartItems, totalAmount, shippingAmount, shippingAddress } = cart;

        const line_items = cartItems?.map((item: ProductProps) => ({
            price_data: {
                currency: "eur",
                unit_amount: Math.round(item.price * 100),
                product_data: {
                    name: item.name,
                    images: [item.filteredImages[0].url[0]], // Ensure images is an array of strings
                },
            },
            quantity: item.qty,
        }));

        const customer = await stripe.customers.create({
            phone:user?.phoneNumber || "", // Consider using real customer data if available
            email: user?.email || "",
            name: user?.username || "",
        });

        const checkoutSession = await stripe.checkout.sessions.create({
            line_items,
            mode: "payment",
            customer: customer.id,
            metadata: {
                referenceId: referenceId, // Ensure the reference ID is concise
                totalAmount: totalAmount.toString(),
                shippingAmount: shippingAmount.toString(),
                userId: user._id.toString(),
                shippingAddress: JSON.stringify(shippingAddress)
            },
            payment_method_types: ['card'],
            success_url: `${process.env.BASE_URL}/success`,
            cancel_url: `${process.env.BASE_URL}/cancel`,
        });

        return NextResponse.json({ url: checkoutSession.url });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
