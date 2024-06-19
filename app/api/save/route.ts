import { connectToDb } from "@/db";
import { Cart } from "@/schemas/cartModel";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';


export async function POST(req: Request) {
    await connectToDb() // Ensure the database is connected

    const { cartItems, totalAmount, shippingAmount, shippingAddress } = await req.json();
    const referenceId = uuidv4(); // Generate a unique ID

    const cart = new Cart({
        referenceId,
        cartItems,
        totalAmount,
        shippingAmount,
        shippingAddress
    });

    await cart.save(); // Save the cart details to MongoDB

    return NextResponse.json({ referenceId });
}
