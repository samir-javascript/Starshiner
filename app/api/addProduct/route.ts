import { connectToDb } from "@/db";
import Product from "@/schemas/productModel";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
export const POST = async(req:Request) => {
     try {
        await connectToDb()
          const { images, name, description, position, price, colors, path, prevPrice, category } = await req.json()
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
          revalidatePath("/all-articles")
          revalidatePath(path)
          revalidatePath("/productsList")
          revalidatePath("/")
          return NextResponse.json({product , message: "product has been created!"})
     } catch (error) {
        console.log(error)
     }
}