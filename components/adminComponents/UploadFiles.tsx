import React, { useEffect, useRef, useState } from 'react'
import '@uploadcare/blocks/web/lr-file-uploader-regular.min.css'; // Import Uploadcare CSS
import * as LR from '@uploadcare/blocks';
const UploadFiles = ({imageId,setImageId}: {
  imageId: string;
  setImageId: (v:string) => void;
  // f: LR.OutputFileEntry<LR.OutputFileStatus>[];
  // setF: (v:LR.OutputFileEntry<LR.OutputFileStatus>[])  => void;
}) => {
  LR.registerBlocks(LR);
 
 
  const ctxProviderRef = useRef<typeof LR.UploadCtxProvider.prototype & UploadCtxProvider>(null);
  useEffect(() => {
    const handleUploadComplete = (e: LR.EventMap["done-click"]) => {
      
     
      const file = e.detail.allEntries.filter((f) => f.status === "success")
    
      if(file.length > 0) {
         
          setImageId(file[0].cdnUrl || "")
          ctxProviderRef.current?.uploadCollection.clearAll()
      }
     
    };
 
    // @ts-ignore
    ctxProviderRef.current?.addEventListener("done-click", handleUploadComplete);
 
    return () => {
      // @ts-ignore
      ctxProviderRef.current?.removeEventListener("done-click", handleUploadComplete);
    };
  }, []);
  
  return (
         <>
            <lr-config imgOnly multiple={false}
             maxLocalFileSizeBytes={10000000} sourceList='local, url, camera, instagram, dropbox, gdrive'  ctx-name="my-uploader" pubkey={"9ac3da2d6690edb9c7fe"}></lr-config>
            <lr-file-uploader-regular class='my-config' ctx-name="my-uploader"></lr-file-uploader-regular> 
            <lr-upload-ctx-provider ctx-name='my-uploader' ref={ctxProviderRef} />
          </> 
  )
}

export default UploadFiles


// import React, { useEffect } from 'react';

// const UploadFiles = ({ setImageUrl }) => {
//   useEffect(() => {
//     const handleUpload = (event) => {
//       const url = event.detail.files[0].cdnUrl;
//       setImageUrl(url);
//     };

//     window.addEventListener('uploadcare-upload-complete', handleUpload);
//     return () => {
//       window.removeEventListener('uploadcare-upload-complete', handleUpload);
//     };
//   }, [setImageUrl]);

//   return <uc-uploader multiple="false"></uc-uploader>;
// };

// export default UploadFiles;
