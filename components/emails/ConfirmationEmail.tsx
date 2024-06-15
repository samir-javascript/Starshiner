import React from 'react'
import { Body, Head, Html, Tailwind,  Img,  Container, Heading, Text, Preview, Section, Button} from "@react-email/components"
// type productProps = {
//     product: {
//         name: string;
//         shippingFee: number;
//         price: number;
//         quantity: number;
//         paymentMethod: string;
//         images: [
//             {
//                 url:string;
//                 colors: [
//                     {
//                         color: string;
//                         sizes: [
//                             {
//                                 size: string;
//                                 stock:number;
//                             }
//                         ]
//                     }
//                 ]
//             }
//         ]

//     },
//     total: number;
// }
const ConfirmationEmail = () => {
  return (
    <Html>
       
       <Tailwind>
         <Head  />
         <Body>
            <Container className='border max-w-5xl mx-auto border-gray-300 w-full flex flex-col '>
                 <Section className='flex w-full border-b border-gray-300 py-3 bg-black-1 items-center justify-center'>
                     <Img className='w-[120px] object-contain ' src="https://stcnt.starshiners.ro/img/logo-StarShinerS-2.svg" alt="starshinerS we's love to dress you" />
                 </Section>
                 <Section className='flex flex-col'>
                    <Section className='flex items-center gap-1'>
                        <Img  className="w-[35px] h-[35px] invert-[100%] object-contain " src="/icons/check-mark.png" alt="any" />
                         <Heading>Thank you for your order!</Heading>
                    </Section>
                    <Section className='flex flex-col gap-1'>
                    <Text>you made the right choice! your order will be ready for shipping in no time.</Text>
                    <Text>would you like to place another order? the items ordered the same da until 16:30 or over
                           the weekend, will be delivered in the same parcel.
                    </Text>
                    <Button className='bg-green-1 text-white font-medium' type="button">
                       Check order status
                    </Button>
                    </Section>
                   
                 </Section>
             <Section className='h-5 bg-black-1 my-2 w-full ' />
             <Section className='flex flex-col p-3'>
                <Section className='mb-2'>
                  <Heading>Order details</Heading>
                  <Text>#485968565 from 14.06.2024</Text>
                </Section>
                <Section className='mb-2'>
                 
                  <Text>the invoice will be issued on person name soufiane hmamou</Text>
                </Section>
                <Section className='mb-2 border-b border-gray-300 pb-3 '>
                 <Text>Shipping address</Text>
                 <Text>marjane 1 nead bank kard fellahi</Text>
               </Section>
                <Section className='my-3'>
                    <Heading className='mb-3'>Payment details</Heading> 
                    <Text>Payment method</Text>
                    <Text>Stripe (online)</Text>
                </Section>
                <Section className='flex items-start gap-3'>
                    <Section>
                    <Text>Amount due for payment</Text>
                    <Text>307,75 £</Text>
                    </Section>
                    <Section>
                         <Img className='w-[120px] object-contain' src='https://brandfetch.com/stripe.com?library=default&collection=logos&asset=id7qRMcZ8P&view=overview' alt='Stripe payment_method on starshiners' />
                    </Section>
                 
                </Section>
             </Section>
             <Section className='h-5 bg-black-1 my-2 w-full ' />
              <Section>
                   <Heading className='mb-3'>Items ordered</Heading>
                   <Section>
                       {[0,1,2,3].map((_,index:number) => (
                          <Section className='flex justify-between border-b border-gray-300 pb-3 items-center w-full' key={index}>
                               <Section className='flex items-center  gap-1 flex-1'>
                                     <Img className='w-[75px] object-cover ' src="https://photos-de.starshiners.ro/109066/700626-372x558-lo.jpg" alt="starshiners product" />
                                     <Section>
                                           <Text>Dress S0585455-9</Text>
                                           <Text>SunShine</Text>
                                           <Text>Size: M (1 qty)</Text>
                                     </Section>
                               </Section>
                               <Text>71,95 £</Text>
                          </Section>
                       ))}
                   </Section>
              </Section>
            </Container>
         </Body>
       </Tailwind>
    </Html>
  )
}

export default ConfirmationEmail