
import PcFooter from './PcFooter'
import MobileFooter from './MobileFooter'

import Email from './Email'

const Footer = () => {
   
  return (
    <div className='w-full bg-gray-1 py-5 '>
        <div className='max-w-[1400px] mx-auto flex flex-col gap-5  '>
              <Email />
              <PcFooter />
              <MobileFooter />
              <div className="text-center w-full items-center justify-center">
                  <p className='text-black-1 text-base  '>© Copyright 2008 - 2024 StarShinerS SRL</p>
              </div>
        </div>
    </div>
  )
}

export default Footer