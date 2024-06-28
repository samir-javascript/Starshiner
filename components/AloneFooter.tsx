import Image from "next/image"


const AloneFooter = () => {
  return (
    <footer className="w-full bg-[#eaecf0] py-5  ">
         <div className="flex flex-col gap-4">
             <div className="flex items-center lg:gap-10 md:gap-4 gap-2 justify-between max-w-[1200px] mx-auto ">
                    <div className="flex items-center gap-2.5">
                          <Image width={35} height={35}  className="w-[35px] h-[35px] max-md:w-[22px] max-md:h-[22px] object-contain " src="/icons/scissors.png" alt="scissors" />
                          <p className="text-gray-400 uppercase text-center font-medium text-base ">OWN <br /> PRODUCTION</p>
                    </div>
                    <div className="flex items-center gap-2.5">
                          <Image width={35} height={35}  className="w-[35px] h-[35px] max-md:w-[22px] max-md:h-[22px] object-contain " src="/icons/check-mark.png" alt="check mark" />
                          <p className="text-gray-400 uppercase text-center font-medium text-base ">VERIFIED <br />
                          QUALITY</p>
                    </div>
                    <div className="flex items-center gap-2.5">
                          <Image width={35} height={35}  className="w-[35px] h-[35px] max-md:w-[22px] max-md:h-[22px] object-contain " src="/icons/secure.png" alt="secure flag" />
                          <p className="text-gray-400 uppercase text-center font-medium text-base ">SECURED <br />
                          PAYMENT</p>
                    </div>
             </div>
             <div className="flex items-center justify-center mt-7">
                <p className="text-base font-normal">© Copyright 2008 - 2024 StarShinerS</p>
             </div>
         </div>
    </footer>
  )
}

export default AloneFooter