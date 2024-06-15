import { getProducts } from "@/actions/product.actions"
import BrandStatement from "@/components/BrandStatement"
import Footer from "@/components/Footer"
import GridCategories from "@/components/GridCategories"
import MobileNav from "@/components/MobileNav"
import Nav from "@/components/Nav"
import Recommendation from "@/components/Recommendation"
import CategoriesSlider from "@/components/Slides"
import MySwiper from "@/components/Swiper"
import UpNav from "@/components/UpNav"
import WardrobeCategories from "@/components/WardrobeCategories"

import { recommendedProducts } from "@/constants"
import { connectToDb } from "@/db"

import Product from "@/schemas/productModel"

export default async function Home() {
  const result = await getProducts()
  console.log(result, "result")
  
 
 
  return (
    <div>
     
      <MySwiper />
      <CategoriesSlider />
      <Recommendation hasBg={true} title="This week`s recommendations" url="/recommeded_week" items={recommendedProducts} />
      <GridCategories />
      <WardrobeCategories />
      <Recommendation hasBg={false} title="Ecological leather articles" url="/recommeded_week" items={recommendedProducts} />
      <Recommendation hasBg= {false} title="Plus Size Clothing" url="/recommeded_week" items={recommendedProducts} />
      <BrandStatement />
     
    </div>
  )
}
