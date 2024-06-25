import { getEliticalProducts, getPlusSizeProducts, getProducts, getRecommendedProducts } from "@/actions/product.actions"
import BrandStatement from "@/components/BrandStatement"

import GridCategories from "@/components/GridCategories"

import Recommendation from "@/components/Recommendation"
import CategoriesSlider from "@/components/Slides"
import MySwiper from "@/components/Swiper"

import WardrobeCategories from "@/components/WardrobeCategories"

import { recommendedProducts } from "@/constants"
import { ProductTypes } from "@/types"


export default async function Home() {
  const result = await getRecommendedProducts() as ProductTypes[]
  
  const ecologicalProducts = await getEliticalProducts() as ProductTypes[]
  const plusSizeProducts = await getPlusSizeProducts() as ProductTypes[]
 
  return (
    <div>
     
      <MySwiper />
      <CategoriesSlider />
      <Recommendation hasBg={true} title="This week`s recommendations" url="/recommeded_week" items={result} />
      <GridCategories />
      <WardrobeCategories />
      <Recommendation hasBg={false} title="Ecological leather articles" url="/recommeded_week" items={ecologicalProducts} />
      <Recommendation hasBg= {true} title="Plus Size Clothing" url="/recommeded_week" items={plusSizeProducts} />
      <BrandStatement />
     
    </div>
  )
}
