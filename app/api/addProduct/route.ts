import { connectToDb } from "@/db";
import Product from "@/schemas/productModel";
import { NextResponse } from "next/server";
export const POST = async(req:Request) => {
     try {
        await connectToDb()
          const { images, name, description, position, price, colors, prevPrice, category } = await req.json()
          const product = await Product.create({
                 images,
                 name,
                 price,
                 category,
                 prevPrice,
                 description,
                 position,
                 colors,
          })
          return NextResponse.json({product , message: "product has been created!"})
     } catch (error) {
        console.log(error)
     }
}