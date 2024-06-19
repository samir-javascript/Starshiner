

// import { ProductProps } from "@/types";
// import { NextResponse } from "next/server";
// import Stripe from "stripe";


// import { connectToDb } from "@/db";
// import { Cart } from "@/schemas/cartModel";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// export async function POST(req: Request) {
//     await connectToDb() // Ensure the database is connected

//     const { referenceId } = await req.json();

//     // Retrieve cart details from MongoDB using the reference ID
//     const cart = await Cart.findOne({ referenceId });

//     if (!cart) {
//         return NextResponse.json({ error: "Cart not found" }, { status: 404 });
//     }

//     const { cartItems, totalAmount, shippingAmount, shippingAddress } = cart;

//     try {
//         const line_items = cartItems?.map((item: ProductProps) => ({
//             price_data: {
//                 currency: "eur",
//                 unit_amount: Math.round(item.price * 100),
//                 product_data: {
//                     name: item.name,
//                     images: [item.filteredImages[0].url[0]], // Fixed: images should be an array
//                 },
//             },
//             quantity: item.qty,
//         }));

//         const customer = await stripe.customers.create({
//             phone: "0609547692",
//             email: "soufianehmamou92@gmail.com",
//             name: "soufiane hmamou",
//             metadata: {
//                 referenceId: referenceId, // Pass reference ID instead of cart details
//                 totalAmount: totalAmount.toString(),
//                 shippingAmount: shippingAmount.toString(),
//                 shippingAddress: JSON.stringify(shippingAddress)
//             }
//         });

//         const checkoutSession = await stripe.checkout.sessions.create({
//             line_items,
//             mode: "payment",
//             customer: customer.id,
//             payment_method_types: ['card'],
//             success_url: 'http://localhost:3000/success',
//             cancel_url: 'http://localhost:3000/cancel',
//         });

//         return NextResponse.json({ url: checkoutSession.url });
//     } catch (error) {
//         console.log(error);
//         return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//     }
// }
import { ProductProps } from "@/types";
import { NextResponse } from "next/server";
import Stripe from "stripe";

import { connectToDb } from "@/db";
import { Cart } from "@/schemas/cartModel";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: Request) {
    await connectToDb() // Ensure the database is connected

    const { referenceId } = await req.json();
     if(!referenceId) {
        throw new Error("missing reference ID")
     }
    // Retrieve cart details from MongoDB using the reference ID
    const cart = await Cart.findOne({ referenceId });

    if (!cart) {
        return NextResponse.json({ error: "Cart not found" }, { status: 404 });
    }

    const { cartItems, totalAmount, shippingAmount, shippingAddress } = cart;

    try {
        const line_items = cartItems?.map((item: ProductProps) => ({
            price_data: {
                currency: "eur",
                unit_amount: Math.round(item.price * 100),
                product_data: {
                    name: item.name,
                    images: [item.filteredImages[0].url[0]], // Fixed: images should be an array
                },
            },
            quantity: item.qty,
        }));

        const customer = await stripe.customers.create({
            phone: "0609547692",
            email: "soufianehmamou92@gmail.com",
            name: "soufiane hmamou",
        });

        await stripe.customers.update(customer.id, {
            metadata: {
                referenceId: referenceId, // Pass reference ID instead of cart details
                totalAmount: totalAmount.toString(),
                shippingAmount: shippingAmount.toString(),
                shippingAddress: JSON.stringify(shippingAddress)
            }
        });

        const checkoutSession = await stripe.checkout.sessions.create({
            line_items,
            mode: "payment",
            customer: customer.id,
            payment_method_types: ['card'],
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
        });

        return NextResponse.json({ url: checkoutSession.url });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
