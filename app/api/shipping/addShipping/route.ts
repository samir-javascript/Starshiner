import { connectToDb } from "../../../../db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import User from "../../../../schemas/userModel";
import Shipping from "../../../../schemas/shippingModel";

export async function POST(req: Request) {
    try {
        const { userId, lastName, path, firstName, address, country, city, zipCode, phoneNumber } = await req.json();

        await connectToDb();

        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        const newShipping = await Shipping.create({
            user: userId,
            lastName,
            firstName,
            address,
            zipCode,
            city,
            country,
            phoneNumber
        });

        if (newShipping) {
            await User.findByIdAndUpdate(user._id, {
                $push: { shippingAddresses: newShipping._id }
            });
        }

        revalidatePath(path);
        revalidatePath(`/client/profile/${user.clerkId}`);

        return NextResponse.json({newShipping,  message: "New address has been added" });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Failed to create new shipping address" }, { status: 500 });
    }
}
