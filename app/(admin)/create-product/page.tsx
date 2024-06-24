"use client"

 import Image from "next/image";
 import { FormEvent, useRef, useState } from "react";
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
   url: string[];
   colors: Color[];
 }

 const Page = () => {
   LR.registerBlocks(LR);
   const [images, setImages] = useState<ImageDetails[]>([]);
  //  f: LR.OutputFileEntry<LR.OutputFileStatus>[];
  //  setF: (v:LR.OutputFileEntry<LR.OutputFileStatus>[])  => void;
   const [f,setF] = useState<LR.OutputFileEntry<LR.OutputFileStatus>[]>()
   const pathname = usePathname()
  // const [imageUrl, setImageUrl] = useState<string>("");
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
    if (f && f.length > 0) {
      const newImages: ImageDetails = {
        url:f.map(entry => entry.cdnUrl || ''), // Assuming cdnUrl is always available
        colors: []
      };
      setImages([...images, newImages]);
      setF([]);
    }
  };

  
  const addColor = () => {
    const updatedImages = images.map(img => {
      if (img.url.some(url => url === selectedImage)) {
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
  
 
const formRef = useRef<HTMLFormElement>(null)
  const addSize = () => {
    const updatedImages = images.map(img => {
      if (img.url.some(url => url === selectedImage)) {
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
  
   const handleCreateProduct = async (e:FormEvent) => {
   e.preventDefault()
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
    
    if(res.ok) {
      setName('');
      setDescription('');
      setCategory('');
      setImages([]);
      setPosition('');
      setPrice(0);
      setPrevPrice(0);
    }
       
       
       
     } catch (error) {
       console.log(error);
     } finally {
       setLoading(false);
     }
   };
console.log(f, "f hereeee")

   return (
     <div className="w-full flex flex-col gap-2 py-10">
       <form ref={formRef} onSubmit={handleCreateProduct} className="max-w-[700px] md:w-[700px] mx-auto flex flex-col gap-7">
         <div className="flex flex-col gap-2">
           <label className="label-css" htmlFor="productName">Product Name</label>
           <input value={name} name="name" onChange={(e) => setName(e.target.value)} className="input-css" type="text" placeholder="Product Name" />
         </div>
         <div className="flex flex-col gap-2">
           <label className="label-css" htmlFor="productDescription">Product Description</label>
           <input value={description} name="description" onChange={(e) => setDescription(e.target.value)} className="input-css" type="text" placeholder="Product Description" />
         </div>
         <div className="flex flex-col gap-2">
           <label className="label-css" htmlFor="productCategory">Product Category</label>
           <input name="category" value={category} onChange={(e) => setCategory(e.target.value)} className="input-css" type="text" placeholder="Product Category" />
         </div>

         {/* Image, Color, and Size Management */}
         <div>
           <h1 className="text-sm text-[#000] font-semibold">Image, Color, and Size Manager</h1>

           <div className='flex gap-2 mb-3'>
             <input
               type="text"
               className='input-css'
               value={f && f.length > 0 ? f[0].cdnUrl || '' : ''}
             
               
               placeholder="Enter image URL"
             />
             <Button className='bg-primary-1 rounded-[10px] ml-2 text-white font-medium text-base' type="button" onClick={addImage}>Add Image</Button>
           </div>

           <div>
             <p className='text-sm font-semibold text-[#000] capitalize'>Select Image</p>
             {/* <select className='outline-none border border-gray-300 px-2.5 py-2 font-medium mb-2 rounded-[10px] bg-gray-200' onChange={(e) => setSelectedImage(e.target.value)} defaultValue="">
               <option value="" disabled>Select image</option>
               {images.map((img, index) => (
                  <option key={index} value={img.url}>{img.url}</option>
               ))}
               
             </select> */}
           <select
  className='outline-none border border-gray-300 px-2.5 py-2 font-medium mb-2 rounded-[10px] bg-gray-200'
  onChange={(e) => setSelectedImage(e.target.value)}
  defaultValue=""
>
  <option value="" disabled>Select image</option>
  {images.map((img, index) =>
    img.url.map((url, urlIndex) => (
      <option key={`${index}-${urlIndex}`} value={url}>{url}</option>
    ))
  )}
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
                   {images.find(img => img.url.includes(selectedImage))?.colors.map((col, index) => (
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
           <input name="price" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="input-css" min={1} type="number" placeholder="Product Price" />
         </div>
         <div className="flex flex-col gap-2">
           <label className="label-css" htmlFor="productPrevPrice">Product Previous Price</label>
           <input name="prevPrice" value={prevPrice} onChange={(e) => setPrevPrice(Number(e.target.value))} className="input-css" min={1} type="number" placeholder="Product Previous Price" />
         </div>
       
         <div className="flex flex-col gap-2">
           <label className="label-css" htmlFor="productPosition">Product Position</label>
           <input name="position" value={position} onChange={(e) => setPosition(e.target.value)} className="input-css" type="text" placeholder="Product Position" />
         </div>
 <div className="flex flex-col  gap-2">
         
          <label className="label-css" htmlFor="productName">Product Images</label>


   <NoSSR  setF={setF}  />
 
 </div>
         <Button className='bg-primary-1 rounded-[10px] text-white font-medium text-base' type="submit" disabled={loading}>
           {loading ? 'Creating...' : 'Create Product'}
         </Button>
       </form>
     </div>
   );
 }

 export default Page;
