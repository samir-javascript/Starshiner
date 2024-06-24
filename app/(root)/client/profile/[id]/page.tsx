import { getCurrentUser, getMyShippingAddreses } from "@/actions/user.actions";
import ProfileTabs from "@/components/ProfileTabs"
import ProfileTop from "@/components/ProfileTop";
import UserProfileAccordions from "@/components/modals/UserProfileAccordions"
import Link from "next/link";

const page = async({params}: {
  params: {
    id: string
  }
}) => {
  if(!params.id) return
   const currentUser = await getCurrentUser({clerkId:params.id!})
   const shippingAddresses = await getMyShippingAddreses({userId:currentUser?._id})

  return (
    <section className="bg-[#eaecf0] py-3 px-3  w-full ">
        <div className='flex max-w-[1200px] mx-auto lg:flex-row flex-col gap-5 items-start'>
           <ProfileTabs />
            <div className='flex-1 flex flex-col gap-5'>
                <ProfileTop title="Member Profile" 
                 links={[
                   {
                     name: "Home",
                     href: "/"
                   },
                   {
                    name: "My Account",
                    href: "/"
                  },
                  {
                    name: "Account settings",
                    href: "/"
                  }
                 ]}
                text="Welcome to StarShinerS! Here you can edit your personal information, personalize your profile and change your password!" />
                 <div className="flex w-full  flex-col gap-4">
                 <UserProfileAccordions currentUser={JSON.stringify(currentUser)} shippings={JSON.stringify(shippingAddresses)} userId={JSON.stringify(currentUser?._id)} />

                 </div>
                <div className="rounded-[17px] w-full bg-white shadow-lg flex flex-col p-5 ">
                     <h2 className="font-bold mb-2 text-[#000] text-[20px] ">Unsubscribe Newsletter</h2>
                     <p className="text-sm text-black-1 font-normal ">If you unsubscribe from the Newsletter, you won`t be aware of StarShinerS SPECIAL OFFERS. Unsubcribe <span> <Link className="underline text-blue-500" href="/newsletter/unsubscribe">here.</Link></span></p>
                </div>


            </div>
        </div>
    </section>
  )
}

export default page