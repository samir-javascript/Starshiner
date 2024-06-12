import React from 'react'
import { Badge } from "@/components/ui/badge"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { GiFoundryBucket } from 'react-icons/gi'
import Link from 'next/link'

const AccordionProductDetails = () => {
  const categories = [
     "top shirts",
     "tinted tops",
     "undervest tops", 
     "style: office",
     "style: casual",
     "cut: tented",
     "fabric/texture: lycra",
     "tented cut",
     "cowl neck",
     "sleeveless",
     "elastic fabric", "shiny fabric"
  ]
  return (
    <>
    <Accordion  type="multiple" >
     
           <AccordionItem   value={`item 1`}>
           <AccordionTrigger className='bg-white hover:no-underline px-3 font-bold'> item details</AccordionTrigger>
           <AccordionContent className='px-3 py-1.5'>
              <div className='flex flex-col'>
                  <h2 className='text-[#000] text-[18px] mb-3 font-bold '>Black Tight Lycra Top with Low Neckline - StarShinerS</h2>
                  <div className='flex items-center gap-[2px] '>
                      <h3 className='text-[#000] text-[15px] font-bold'>Item code: </h3>
                      <p className='text-black-1 text-[15px] '>S-058597-1</p>
                  </div>
                  <p className='text-black-1 text-[15px] leading-[1.5] mt-3 '>Black top made of thin lycra with good elasticity and a shiny appearance.
                     The cut is tight, on the body. The neckline is dropped.</p>
                     <p className='text-black-1 text-[15px] leading-[1.5] mt-3'>* The model wears size: S | Height: <span className='font-bold text-[#000] '> 172  </span>cm</p>
              </div>
           </AccordionContent> 
         </AccordionItem>
     
         <AccordionItem value='item 2'>
              <AccordionTrigger className='bg-white hover:no-underline px-3 font-bold'>
                  Material & care instructions
              </AccordionTrigger> 
              <AccordionContent className='px-3 py-1.5'>
                   <div className="flex flex-col">
                   <div className='flex items-center gap-[2px] '>
                      <h3 className='text-[#000] text-[15px] font-bold'>Composition: </h3>
                      <p className='text-black-1 text-[15px] '>95% Polyester, 5% Spandex</p>
                  </div>
                   <div className="mt-3 flex flex-col">
                   <h3 className='text-[#000] text-[15px] mb-4 font-bold'>Instructions: </h3>
                   <ul className='flex flex-col gap-2.5'>
                        <li className='flex items-center gap-1'>
                           <GiFoundryBucket size={18} />
                           <p>Do not tumble dry</p>
                        </li>
                        <li className='flex items-center gap-1'>
                           <GiFoundryBucket size={18} />
                           <p>bleach if needed</p>
                        </li>
                        <li className='flex items-center gap-1'>
                           <GiFoundryBucket size={18} />
                           <p>Do not dry clean.</p>
                        </li>
                        <li className='flex items-center gap-1'>
                           <GiFoundryBucket size={18} />
                           <p>Machine wash, water temp not above 30 Celsius</p>
                        </li>
                        <li className='flex items-center gap-1'>
                           <GiFoundryBucket size={18} />
                           <p>Iron, max temp 110 Celsius</p>
                        </li>
                   </ul>
                   </div>
                   <p className='text-black-1  text-[15px] leading-[1.5] mt-5'>* Please check the product label before cleaning!</p>
                   </div>
              </AccordionContent>
         </AccordionItem>
         <AccordionItem value='item 3'>
            <AccordionTrigger  className='bg-white hover:no-underline px-3 font-bold'>
            Associated categories
            </AccordionTrigger>
            <AccordionContent className='px-3 py-1.5'>
              <div className='flex items-center gap-3 flex-wrap'>
                {categories.map(item => (
                  <Link href={item} key={item}>
                   <Badge  className='bg-[#e8edf2] hover:text-blue-500 px-2 py-1 ' variant="secondary">
    {item}
</Badge>
                  </Link>

                ))}
             

              </div>
           </AccordionContent> 
       </AccordionItem>
       <AccordionItem value='item 4'>
            <AccordionTrigger  className='bg-white hover:no-underline px-3 font-bold'>
                Shipping & returns
            </AccordionTrigger>
            <AccordionContent className='px-3 py-1.5'>
              <>
                  <ul style={{listStyleType: "disc"}} className='flex  flex-col gap-2.5'>
                       <li className='leading-[19px] text-[14px] text-black-1  '>
                           International delivery
                       </li>
                       <li className='leading-[19px] text-[14px] text-black-1  '><Link className='font-medium text-blue-500 underline ' href="/">Here</Link> you can find delivery time and shipping fee for each country in which we deliver</li>
                       <li className='leading-[19px] text-[14px] text-black-1  '>Payment by bank card, Stripe or cash on delivery</li>
                       <li className='leading-[19px] text-[14px] text-black-1  '>You can easily return the item within 14 days</li>
                       <li className='leading-[19px] text-[14px] text-black-1  '>The money will be refunded to you within 7 working days</li>
                  </ul>
              </>
           </AccordionContent> 
       </AccordionItem>

       <AccordionItem value='item 5'>
            <AccordionTrigger  className='bg-white hover:no-underline px-3 font-bold'>
            Size Guide for
            </AccordionTrigger>
            <AccordionContent className='px-3 py-1.5'>
              <div className='flex flex-col'>
                  <div className='flex items-center gap-3 w-full'>
                      <div>
                          <img  className='w-[120px] object-cover ' src="https://photos-de.starshiners.ro/104410/696565-372x558-lo.jpg" alt="" />
                      </div>
                      <div className='flex flex-col gap-1.5'>
                      <div className='flex items-center gap-[2px] '>
                      <h3 className='text-[#000] text-[15px] font-bold'>Item code: </h3>
                      <p className='text-black-1 text-[15px] '>S-058597-1</p>
                  </div>
                  <div className='flex items-center gap-[2px] '>
                      <h3 className='text-[#000] text-[15px] font-bold'>Item length: </h3>
                      <p className='text-black-1 text-[15px] '>measured from the armhole to the edge</p>
                  </div>
                  <div className='flex items-center gap-[2px] '>
                      <h3 className='text-[#000] text-[15px] font-bold'>The material extends: </h3>
                      <p className='text-black-1 text-[15px] '>1 cm</p>
                  </div>
                      </div>
                  </div>
                    {/* tableau */}
                     <table className='mt-4'>
                        <thead style={{borderCollapse: "inherit"}} className='bg-light-2'>
                             <tr>
                                 <th className='p-2 border'>INT (EU)</th>
                                 <th className='p-2 border'
                                 >Bust <br />
                                 (cm)</th>
                                 <th className='p-2 border'>Waist <br />
                                 (cm)</th>
                                 <th className='p-2 border'>Item <br />
                                 length</th>
                             </tr>
                        </thead>
                        <tbody className='w-full text-center'>
                            <tr className=' border'>
                                <td className='p-3 border'> <span className='font-bold text-[#000] '>S</span> <br />
                                (36)</td>
                                <td className='p-3 border'>86 - 89</td>
                               
                                <td className='p-3 border'>66 - 69</td>
                                <td className='p-3 border'>58 cm</td>
                            </tr>
                            <tr >
                                <td className='p-3 border '><span className='font-bold text-[#000] '>M</span> <br />
                                (38)</td>
                                <td className='p-3 border'>90 - 93</td>
                               
                                <td className='p-3 border'>70 - 73</td>
                                <td className='p-3 border'>58 cm</td>
                            </tr>
                            <tr>
                                <td className='p-3 border'><span className='font-bold text-[#000] '>L</span> <br />
                                (40)</td>
                                <td className='p-3 border'>94 - 97</td>
                               
                                <td className='p-3 border'>74 - 77</td>
                                <td className='p-3 border'>58 cm</td>
                            </tr>
                            <tr>
                                <td className='p-3 border'><span className='font-bold text-[#000] '>XL</span> <br />
                                (42)</td>
                                <td className='p-3 border'>98 - 101</td>
                               
                                <td className='p-3 border'>78 - 81</td>
                                <td className='p-3 border'>59 cm</td>
                            </tr>
                            <tr>
                                <td className='p-3 border'><span className='font-bold text-[#000] '>2XL</span> <br />
                                (44)</td>
                                <td className='p-3 border'>102 - 107</td>
                               
                                <td className='p-3 border'>82 - 87</td>
                                <td className='p-3 border'> 59 cm</td>
                            </tr>
                            <tr>
                                <td className='p-3 border'><span className='font-bold text-[#000] '>3XL</span> <br />
                                (46)</td>
                                <td className='p-3 border'>108 - 111</td>
                               
                                <td className='p-3 border'>88 - 91</td>
                                <td className='p-3 border'>59 cm</td>
                            </tr>
                        </tbody>
                     </table>
                  <p className='text-black-1 text-[15px] leading-[1.5] mt-3'>* IMPORTANT The sizes in the Size Guide are the sizes of the human body, not of the article and are expressed in centimetres. Compare your dimensions to the ones in the Size guide or introduce them in the StarSize Guide to make the correct decision regarding the size that suits you.</p>
              </div>
           </AccordionContent> 
       </AccordionItem>

    </Accordion>
        </>
  )
}

export default AccordionProductDetails