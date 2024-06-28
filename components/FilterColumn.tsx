// "use client"
// import { useEffect, useState } from "react"
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"

// import { categories, colors, colorsFilter, sizes } from "@/constants"
// import { useRouter } from "next/navigation"
// const FilterColumn = () => {
//   const [checkedColors, setCheckedColors] = useState<string[]>([]);

//   // Function to generate search parameters
//   const generateSearchParams = (checkedColors:string[]) => {
//     const params = new URLSearchParams();
//     checkedColors.forEach((color) => {
//       params.append('color', color);
//     });
//     return params.toString();
//   };

//   // State to hold the current search parameters
//   const [searchParams, setSearchParams] = useState('');
//  const router = useRouter()
//   // Effect to update searchParams whenever checkedColors change
//   useEffect(() => {
//     const paramsString = generateSearchParams(checkedColors);
//     setSearchParams(paramsString);
//     // You can use setSearchParams to update URL or perform other actions
//   }, [checkedColors]);

//   const handleColorChange = (color:string) => {
//     if (checkedColors.includes(color)) {
//       setCheckedColors(checkedColors.filter((c) => c !== color));
//     } else {
//       setCheckedColors([...checkedColors, color]);
//     }
//   };
//   useEffect(()=> {
//      if(searchParams) {
//         router.push(`/all-articles?${searchParams}`)
//      }
//   }, [searchParams,router] )
//   console.log(searchParams, "search params")
//   return (
//     <div className='w-[191px] max-lg:hidden'>
//         <Accordion  type="multiple">
  
      
//         <AccordionItem   value={`item 1`}>
//        <AccordionTrigger className='bg-white px-3 font-bold'>SIZE </AccordionTrigger>
//        <AccordionContent className='px-3 py-1.5'>
//        <div className="h-[300px] overflow-y-auto flex flex-col  gap-3  ">
//               {sizes.map((item)=> (
//                   <div className="flex items-center border-b border-gray-300 pb-3  gap-1.5" key={item.size}>
//                         <input type="checkbox" />
//                         <p className="whitespace-nowrap text-sm text-[#111] capitalize font-normal ">{item.size} </p>
//                   </div>
//               ) )}
//          </div>
//        </AccordionContent>
//      </AccordionItem>
//      <AccordionItem   value={`item 2`}>
//        <AccordionTrigger className='bg-white px-3 font-bold'>COLOR </AccordionTrigger>
//        <AccordionContent className='py-1.5 px-3'>
//        <div className="h-[300px] overflow-y-auto flex flex-col  gap-3  ">
//               {colorsFilter.map((item)=> (
//                   <div className="flex items-center border-b border-gray-300 pb-3  gap-1.5" key={item.color}>
//                         <input type="checkbox" 
//                         checked={checkedColors.includes(item.name)}
//                         onChange={() => handleColorChange(item.name)}
//                         />
//                         <div className=' flex items-center justify-center rounded-full w-[28px] h-[28px] p-[1px] border-2 border-gray-300 '>
//                       {/* Use inline style for custom colors */}
                     
//                         <div style={{ backgroundColor: item.color }} className='w-full h-full rounded-full' />
                      
//                     </div>
//                         <p className="whitespace-nowrap text-sm text-[#111] capitalize font-normal ">{item.name} </p>
//                   </div>
//               ) )}
//          </div>
//        </AccordionContent>
//      </AccordionItem>
//      <AccordionItem   value={`item 3`}>
//        <AccordionTrigger className='bg-white px-3 font-bold'>CATEGORY </AccordionTrigger>
//        <AccordionContent className='px-3 py-1.5'>
//        <div className="h-[300px] overflow-y-auto flex flex-col  gap-3  ">
//               {categories.map((item)=> (
//                   <div className="flex items-center border-b border-gray-300 pb-3  gap-1.5" key={item.id}>
//                         <input type="checkbox" />
//                         <p className="whitespace-nowrap text-sm text-[#111] capitalize font-normal ">{item.name} </p>
//                   </div>
//               ) )}
//          </div>
//        </AccordionContent>
//      </AccordionItem>
//      <AccordionItem   value={`item 4`}>
//        <AccordionTrigger className='bg-white px-3 font-bold'>SORT BY </AccordionTrigger>
//        <AccordionContent className='px-3 py-1.5'>
//             <div className="flex flex-col gap-3">
//             <div className="flex items-center border-b border-gray-300 pb-3  gap-1.5">
//                         <input type="checkbox" />
//                         <p className="whitespace-nowrap text-sm text-[#111] capitalize font-normal ">price - low to high </p>
//                   </div>
//                   <div className="flex items-center pb-3 gap-1.5">
//                         <input type="checkbox" />
//                         <p className="whitespace-nowrap text-sm text-[#111] capitalize font-normal ">price - high to low </p>
//                   </div>
//             </div>
//        </AccordionContent>
//      </AccordionItem>
 
 
// </Accordion>
//     </div>
//   )
// }

// export default FilterColumn 
"use client"
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { categories, colorsFilter, sizes } from "@/constants";
import { useRouter } from "next/navigation";

const FilterColumn = () => {
  const [checkedColors, setCheckedColors] = useState<string[]>([]);
  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);

  // Function to generate search parameters
  const generateSearchParams = (colors: string[], categories: string[]) => {
    const params = new URLSearchParams();
    colors.forEach((color) => {
      params.append("color", color);
    });
    categories.forEach((category) => {
      params.append("category", category);
    });
    return params.toString();
  };

  // State to hold the current search parameters
  const [searchParams, setSearchParams] = useState("");
  const router = useRouter();

  // Effect to update searchParams whenever colors or categories change
  useEffect(() => {
    const paramsString = generateSearchParams(checkedColors, checkedCategories);
    setSearchParams(paramsString);
    // You can use setSearchParams to update URL or perform other actions
  }, [checkedColors, checkedCategories]);

  const handleColorChange = (color: string) => {
    if (checkedColors.includes(color)) {
      setCheckedColors(checkedColors.filter((c) => c !== color));
    } else {
      setCheckedColors([...checkedColors, color]);
    }
  };

  const handleCategoryChange = (category: string) => {
    if (checkedCategories.includes(category)) {
      setCheckedCategories(checkedCategories.filter((c) => c !== category));
    } else {
      setCheckedCategories([...checkedCategories, category]);
    }
  };

  useEffect(() => {
    if (searchParams) {
      router.push(`/all-articles?${searchParams}`);
    }
  }, [searchParams, router]);

  return (
    <div className="w-[191px] max-lg:hidden">
      <Accordion type="multiple">
        <AccordionItem value={`item 1`}>
          <AccordionTrigger className="bg-white px-3 font-bold">
            SIZE
          </AccordionTrigger>
          <AccordionContent className="px-3 py-1.5">
            <div className="h-[300px] overflow-y-auto flex flex-col gap-3">
              {sizes.map((item) => (
                <div
                  className="flex items-center border-b border-gray-300 pb-3 gap-1.5"
                  key={item.size}
                >
                  <input type="checkbox" />
                  <p className="whitespace-nowrap text-sm text-[#111] capitalize font-normal">
                    {item.size}
                  </p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={`item 2`}>
          <AccordionTrigger className="bg-white px-3 font-bold">
            COLOR
          </AccordionTrigger>
          <AccordionContent className="py-1.5 px-3">
            <div className="h-[300px] overflow-y-auto flex flex-col gap-3">
              {colorsFilter.map((item) => (
                <div
                  className="flex items-center border-b border-gray-300 pb-3 gap-1.5"
                  key={item.color}
                >
                  <input
                    type="checkbox"
                    checked={checkedColors.includes(item.name)}
                    onChange={() => handleColorChange(item.name)}
                  />
                  <div className="flex items-center justify-center rounded-full w-[28px] h-[28px] p-[1px] border-2 border-gray-300">
                    <div
                      style={{ backgroundColor: item.color }}
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <p className="whitespace-nowrap text-sm text-[#111] capitalize font-normal">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={`item 3`}>
          <AccordionTrigger className="bg-white px-3 font-bold">
            CATEGORY
          </AccordionTrigger>
          <AccordionContent className="px-3 py-1.5">
            <div className="h-[300px] overflow-y-auto flex flex-col gap-3">
              {categories.map((item) => (
                <div
                  className="flex items-center border-b border-gray-300 pb-3 gap-1.5"
                  key={item.id}
                >
                  <input
                    type="checkbox"
                    checked={checkedCategories.includes(item.name)}
                    onChange={() => handleCategoryChange(item.name)}
                  />
                  <p className="whitespace-nowrap text-sm text-[#111] capitalize font-normal">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={`item 4`}>
          <AccordionTrigger className="bg-white px-3 font-bold">
            SORT BY
          </AccordionTrigger>
          <AccordionContent className="px-3 py-1.5">
            <div className="flex flex-col gap-3">
              <div className="flex items-center border-b border-gray-300 pb-3 gap-1.5">
                <input type="checkbox" />
                <p className="whitespace-nowrap text-sm text-[#111] capitalize font-normal">
                  price - low to high
                </p>
              </div>
              <div className="flex items-center pb-3 gap-1.5">
                <input type="checkbox" />
                <p className="whitespace-nowrap text-sm text-[#111] capitalize font-normal">
                  price - high to low
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FilterColumn;
