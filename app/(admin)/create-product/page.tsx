// "use client"


// import Image from "next/image";
// import { FormEvent, useState } from "react";

// import { usePathname } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import * as LR from '@uploadcare/blocks';
// import dynamic from 'next/dynamic';
//  const NoSSR = dynamic(() => import('@/components/adminComponents/UploadFiles'), { ssr: false })


// interface Size {
//    size: string;
//    stock: number;
//  }
 
//  interface Color {
//    color: string;
//    sizes: Size[];
//  }
// const page = () => {
//   LR.registerBlocks(LR);
//   const [imageId,setImageId] = useState<string>("")
//   const [loading,setLoading] = useState(false)
//   const [f,setF] = useState< LR.OutputFileEntry<LR.OutputFileStatus>[]>([])
//   const [position,setPosition] = useState('')
//   const [price,setPrice] = useState<number>(0)
//   const [prevPrice,setPrevPrice] = useState<number>(0)
//   const [category,setCategory] = useState('')
//   const [name,setName] = useState('')
//   const [description,setDescription] = useState('')
//   const [colors, setColors] = useState<Color[]>([]);
//   const [color, setColor] = useState<string>('');
//   const [size, setSize] = useState<string>('');
//   const [stock, setStock] = useState<number>(0);
//   const [selectedColor, setSelectedColor] = useState<string | null>(null);

//   const addColor = () => { 
//     setColors([...colors, { color, sizes: [] }]);
//     setColor('');
//   };

//   const addSize = () => {
//     const updatedColors = colors.map((col) => {
//       if (col.color === selectedColor) {
//         return {
//           ...col,
//           sizes: [...col.sizes, { size, stock }]
//         };
//       }
//       return col;
//     });
//     setColors(updatedColors);
//     setSize('');
//     setStock(0);
//   };

//     const handleCreateProduct = async(e:FormEvent)=>  {
//       e.preventDefault()
//       setLoading(true)
//        try {
       
//         const res = await fetch('/api/addProduct', {
//            method: "POST",
//             headers: {
//             'Content-Type': 'application/json'
//           },
//            body: JSON.stringify({
//               name,
//               description,
//               images: imageId!,
//               colors,
//               category,
//               price,
//               prevPrice,
//               position
//            })
//         })
//         if(res.ok) {
//             setName('')
//             setDescription('')
//             setCategory('')
//             setColors([])
//             setImageId('')
//             setPosition('')
//             setPrice(0)
//             setPrevPrice(0)
          
//         }else {
//           alert('something went shit')
//         }

         
          
//        } catch (error) {
//           console.log(error)
//        }finally {
//         setLoading(false)
//        }
//     }
   
//   return (
//     <>
   
  
//         <div className="w-full flex flex-col gap-2 py-10 ">
//              <form onSubmit={handleCreateProduct} className="max-w-[700px]  md:w-[700px] mx-auto flex flex-col gap-7">
//                   <div className="flex flex-col  gap-2">
//                      <label className="label-css" htmlFor="productName">Product Name</label>
//                      <input value={name} onChange={(e) => setName(e.target.value)} className="input-css" type="text" placeholder="Product Name" />
//                   </div>
//                   <div className="flex flex-col  gap-2">
//                      <label className="label-css" htmlFor="productName">Product Description</label>
//                      <input value={description} onChange={(e) => setDescription(e.target.value)} className="input-css" type="text" placeholder="Product Description" />
//                   </div>
//                   <div className="flex flex-col  gap-2">
//                      <label className="label-css" htmlFor="productName">Product Category</label>
//                      <input value={category} onChange={(e) => setCategory(e.target.value)} className="input-css" type="text" placeholder="Product Category" />
//                   </div>
//                  {/* color and size */}
//                  <div>
//       <h1 className="text-sm text-[#000] font-semibold ">Color and Size Manager</h1>

//       <div className='flex gap-2 mb-3'>
//         <input 
//           type="text" 
//           className='input-css'
//           value={color} 
//           onChange={(e) => setColor(e.target.value)} 
//           placeholder="Enter color" 
//         />
//         <Button  className='bg-primary-1 rounded-[10px] ml-2 text-white font-medium text-base ' type="button" onClick={addColor}>Add Color</Button>
//       </div>

//       <div>
//          <p className='text-sm font-semibold text-[#000] capitalize '>select color</p>
//         <select className='outline-none border border-gray-300 px-2.5 py-2 font-medium mb-2 rounded-[10px] bg-gray-200 ' onChange={(e) => setSelectedColor(e.target.value)} defaultValue="">
//           <option value="" disabled>Select color</option>
//           {colors.map((col, index) => (
//             <option key={index} value={col.color}>{col.color}</option>
//           ))}
//         </select>
//       </div>

//       {selectedColor && (
//         <div className='flex max-w-[700px]  md:w-[700px] mx-auto flex-col gap-2'>
//   <div className='flex gap-2'>
//           <input 
//           className='input-css'
//             type="text" 
//             value={size} 
//             onChange={(e) => setSize(e.target.value)} 
//             placeholder="Enter size" 
//           />
//           <input 
//             type="number" 
//              className='input-css'
//             value={stock} 
//             onChange={(e) => setStock(Number(e.target.value))} 
//             placeholder="Enter stock" 
//           />
         
//         </div>
//         <button  className='bg-primary-1 w-[200px]  py-2 rounded-[10px] ml-2 text-white font-medium text-base ' type="button" onClick={addSize}>Add Size</button>
//         </div>
      
//       )}

//       <div>
//         {colors.map((col, index) => (
//           <div key={index}>
//             <h2>{col.color}</h2>
//             <ul>
//               {col.sizes.map((s, i) => (
//                 <li key={i}>{s.size} - {s.stock}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//                  {/* color and size ends  */}
//                   <div className="flex flex-col  gap-2">
//                      <label className="label-css" htmlFor="productName">Product price</label>
//                      <input value={price} onChange={(e) => setPrice(Number(e.target.value))} className="input-css" min={1} type="number" placeholder="Product price" />
//                   </div>
//                   <div className="flex flex-col  gap-2">
//                      <label className="label-css" htmlFor="productName">Product prevPrice</label>
//                      <input value={prevPrice} onChange={(e) => setPrevPrice(Number(e.target.value))} className="input-css" min={1} type="number" placeholder="Product prevPrice" />
//                   </div>
//                   <div className="flex flex-col  gap-2">
//                      <label className="label-css" htmlFor="productName">Product Position</label>
//                      <input value={position} onChange={(e) => setPosition(e.target.value)} className="input-css"  type="text" placeholder="Product Position" />
//                   </div>
//                   <div className="flex flex-col  gap-2">
         
//                   <label className="label-css" htmlFor="productName">Product Images</label>
         
         
//           <NoSSR f={f} setF={setF} setImageId={setImageId} imageId={imageId} />
          
//         </div>
       
//         {f.length > 0 && (
//  <div className="flex items-center justify-center gap-2 w-full">
//   {f.map((item,i) => (
//     <Image 
//    src={item.cdnUrl || "" }
//    width={200}
   
//    height={200}
//    className="mt-5 rounded-xl"
    
//    alt="thumbnail"
//  />
//   ))}
 
//  </div>
//    )}

//         <Button className='w-full hover:opacity-[0.9] bg-primary-1 capitalize font-medium text-base text-white rounded-[15px] ' type="submit">
//            {loading ? "loading..." : "create product"} 
//         </Button>
//              </form>
//         </div>
  
//   </>
  
//   )
// }

// export default page



 "use client"

 import Image from "next/image";
 import { FormEvent, useState } from "react";
 import { Button } from "@/components/ui/button";
 import * as LR from '@uploadcare/blocks';
 import dynamic from 'next/dynamic';
import { usePathname } from "next/navigation";

 const NoSSR = dynamic(() => import('@/components/adminComponents/UploadFiles'), { ssr: false });

 interface Size {
   size: string;
   stock: number;
 }

 interface Color {
   color: string;
   sizes: Size[];
 }

 interface ImageDetails {
   url: string;
   colors: Color[];
 }

 const Page = () => {
   LR.registerBlocks(LR);
   const [images, setImages] = useState<ImageDetails[]>([]);
   const pathname = usePathname()
   const [imageUrl, setImageUrl] = useState<string>('');
   const [color, setColor] = useState<string>('');
   const [size, setSize] = useState<string>('');
   const [stock, setStock] = useState<number>(0);
   const [selectedImage, setSelectedImage] = useState<string | null>(null);
   const [selectedColor, setSelectedColor] = useState<string | null>(null);
   const [position, setPosition] = useState('');
   const [price, setPrice] = useState<number>(0);
   const [prevPrice, setPrevPrice] = useState<number>(0);
   const [category, setCategory] = useState('');
   const [name, setName] = useState('');
   const [description, setDescription] = useState('');
   const [loading, setLoading] = useState(false);

   const addImage = () => {
     setImages([...images, { url: imageUrl, colors: [] }]);
     setImageUrl('');
   };

   const addColor = () => {
     const updatedImages = images.map(img => {
       if (img.url === selectedImage) {
         return {
           ...img,
           colors: [...img.colors, { color, sizes: [] }]
         };
       }
       return img;
     });
     setImages(updatedImages);
     setColor('');
   };

   const addSize = () => {
     const updatedImages = images.map(img => {
       if (img.url === selectedImage) {
         return {
           ...img,
           colors: img.colors.map(col => {
             if (col.color === selectedColor) {
               return {
                 ...col,
                 sizes: [...col.sizes, { size, stock }]
               };
             }
             return col;
           })
         };
       }
       return img;
     });
     setImages(updatedImages);
     setSize('');
     setStock(0);
   };

   const handleCreateProduct = async (e: FormEvent) => {
     e.preventDefault();
     setLoading(true);
     try {
       const res = await fetch('/api/addProduct', {
         method: "POST",
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           name,
           description,
           path: pathname,
           images,
           category,
           price,
           prevPrice,
           position
         })
       });
       if (res.ok) {
         setName('');
         setDescription('');
         setCategory('');
         setImages([]);
         setPosition('');
         setPrice(0);
         setPrevPrice(0);
       } else {
         alert('something went wrong');
       }
     } catch (error) {
       console.log(error);
     } finally {
       setLoading(false);
     }
   };

   return (
     <div className="w-full flex flex-col gap-2 py-10">
       <form onSubmit={handleCreateProduct} className="max-w-[700px] md:w-[700px] mx-auto flex flex-col gap-7">
         <div className="flex flex-col gap-2">
           <label className="label-css" htmlFor="productName">Product Name</label>
           <input value={name} onChange={(e) => setName(e.target.value)} className="input-css" type="text" placeholder="Product Name" />
         </div>
         <div className="flex flex-col gap-2">
           <label className="label-css" htmlFor="productDescription">Product Description</label>
           <input value={description} onChange={(e) => setDescription(e.target.value)} className="input-css" type="text" placeholder="Product Description" />
         </div>
         <div className="flex flex-col gap-2">
           <label className="label-css" htmlFor="productCategory">Product Category</label>
           <input value={category} onChange={(e) => setCategory(e.target.value)} className="input-css" type="text" placeholder="Product Category" />
         </div>

         {/* Image, Color, and Size Management */}
         <div>
           <h1 className="text-sm text-[#000] font-semibold">Image, Color, and Size Manager</h1>

           <div className='flex gap-2 mb-3'>
             <input
               type="text"
               className='input-css'
               value={imageUrl}
               onChange={(e) => setImageUrl(e.target.value)}
               placeholder="Enter image URL"
             />
             <Button className='bg-primary-1 rounded-[10px] ml-2 text-white font-medium text-base' type="button" onClick={addImage}>Add Image</Button>
           </div>

           <div>
             <p className='text-sm font-semibold text-[#000] capitalize'>Select Image</p>
             <select className='outline-none border border-gray-300 px-2.5 py-2 font-medium mb-2 rounded-[10px] bg-gray-200' onChange={(e) => setSelectedImage(e.target.value)} defaultValue="">
               <option value="" disabled>Select image</option>
               {images.map((img, index) => (
                 <option key={index} value={img.url}>{img.url}</option>
               ))}
             </select>
           </div>

           {selectedImage && (
             <div className='flex max-w-[700px] md:w-[700px] mx-auto flex-col gap-2'>
               <div className='flex gap-2'>
                 <input
                   className='input-css'
                   type="text"
                   value={color}
                   onChange={(e) => setColor(e.target.value)}
                   placeholder="Enter color"
                 />
                 <Button className='bg-primary-1 rounded-[10px] ml-2 text-white font-medium text-base' type="button" onClick={addColor}>Add Color</Button>
               </div>

               <div>
                 <p className='text-sm font-semibold text-[#000] capitalize'>Select Color</p>
                 <select className='outline-none border border-gray-300 px-2.5 py-2 font-medium mb-2 rounded-[10px] bg-gray-200' onChange={(e) => setSelectedColor(e.target.value)} defaultValue="">
                   <option value="" disabled>Select color</option>
                   {images.find(img => img.url === selectedImage)?.colors.map((col, index) => (
                     <option key={index} value={col.color}>{col.color}</option>
                   ))}
                 </select>
               </div>

               {selectedColor && (
                 <div className='flex max-w-[700px] md:w-[700px] mx-auto flex-col gap-2'>
                   <div className='flex gap-2'>
                     <input
                       className='input-css'
                       type="text"
                       value={size}
                       onChange={(e) => setSize(e.target.value)}
                       placeholder="Enter size"
                     />
                     <input
                       type="number"
                       className='input-css'
                       value={stock}
                       onChange={(e) => setStock(Number(e.target.value))}
                       placeholder="Enter stock"
                     />
                   </div>

                   <button className='bg-primary-1 w-[200px] py-2 rounded-[10px] ml-2 text-white font-medium text-base' type="button" onClick={addSize}>Add Size</button>
                 </div>
               )}

               <div>
                 {images.map((img, imgIndex) => (
                   <div key={imgIndex}>
                     <h2>{img.url}</h2>
                     {img.colors.map((col, colIndex) => (
                       <div key={colIndex}>
                         <h3>{col.color}</h3>
                         <ul>
                           {col.sizes.map((s, sizeIndex) => (
                             <li key={sizeIndex}>{s.size} - {s.stock}</li>
                           ))}
                         </ul>
                       </div>
                     ))}
                   </div>
                 ))}
               </div>
             </div>
           )}
         </div>

         <div className="flex flex-col gap-2">
           <label className="label-css" htmlFor="productPrice">Product Price</label>
           <input value={price} onChange={(e) => setPrice(Number(e.target.value))} className="input-css" min={1} type="number" placeholder="Product Price" />
         </div>
         <div className="flex flex-col gap-2">
           <label className="label-css" htmlFor="productPrevPrice">Product Previous Price</label>
           <input value={prevPrice} onChange={(e) => setPrevPrice(Number(e.target.value))} className="input-css" min={1} type="number" placeholder="Product Previous Price" />
         </div>
       
         <div className="flex flex-col gap-2">
           <label className="label-css" htmlFor="productPosition">Product Position</label>
           <input value={position} onChange={(e) => setPosition(e.target.value)} className="input-css" type="text" placeholder="Product Position" />
         </div>
 <div className="flex flex-col  gap-2">
         
          <label className="label-css" htmlFor="productName">Product Images</label>


   <NoSSR  setImageId={setImageUrl} imageId={imageUrl} />
 
 </div>
         <Button className='bg-primary-1 rounded-[10px] text-white font-medium text-base' type="submit" disabled={loading}>
           {loading ? 'Creating...' : 'Create Product'}
         </Button>
       </form>
     </div>
   );
 }

 export default Page;
