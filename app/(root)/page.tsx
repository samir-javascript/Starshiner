import { getProducts } from "@/actions/product.actions"
import BrandStatement from "@/components/BrandStatement"

import GridCategories from "@/components/GridCategories"

import Recommendation from "@/components/Recommendation"
import CategoriesSlider from "@/components/Slides"
import MySwiper from "@/components/Swiper"

import WardrobeCategories from "@/components/WardrobeCategories"

import { recommendedProducts } from "@/constants"


export default async function Home() {
  const result = await getProducts({page: 1})
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
