"use client"

import { deleteUser } from "@/actions/user.actions";
import { useRouter } from "next/navigation";
import { FaCheck, FaEdit, FaTimes, FaTrash } from "react-icons/fa";

const UsersTableList = ({users}: {users:string}) => {
  const router = useRouter()
    const parsedUsers = JSON.parse(users)
    const handleDeleteUser = async(clerkId:string) => {
      if(window.confirm('are you sure you want to delete this user')) {
        try {
          await deleteUser({clerkId})
          router.refresh()
      } catch (error) {
         console.log(error)
      }
      }
          
    }
  return (
    <>
    <table className='mt-4'>
                    <thead style={{borderCollapse: "inherit"}} className='bg-light-2'>
                         <tr>
                         <th className='p-2 border'>Image</th>
                             <th className='p-2 border'>Name</th>
                             <th className='p-2 border'
                             >
                             Email</th>
                             <th className='p-2 border'>
                             PhoneNumber</th>
                             <th className='p-2 border'>
                             isAdmin</th>
                             <th className='p-2 border'>
                             Actions</th>
                         </tr>
                    </thead>
                    <tbody className='w-full text-center'>
                         {parsedUsers.map((item: {
                            _id: string;
                            username: string;
                            email: string;
                            phoneNumber:string;
                            isAdmin: boolean;
                            clerkId:string;
                            picture: string
                         }) => (
                            <tr key={item._id} className=' border'>
                            <td className='p-3 border flex items-center justify-center'> 
                                 <img className='w-[75px] h-[75px] object-contain rounded-full ' src={item.picture} alt={item.username} />
                             </td>
                            <td className='p-3 border lg:max-w-[300px] '>
                                <p className="text-base text-[#222] font-medium "> {item.username}</p>
                            </td>
                           
                            <td className='p-3 border'> <p className="text-base text-[#222] font-medium "> {item.email}</p> </td>
     
                            <td className='p-3 border'> <p className="text-base text-[#222] font-medium "> {item.phoneNumber}</p> </td>
                            <td className='p-3 border  '> 
                                 {item.isAdmin ? (
                                   <FaCheck  className="mx-auto" color="green" /> 
                                 ): (
                                    <FaTimes  className="mx-auto" color="red" /> 
                                 )}
                          </td>
                            <td className="">
                                 <div className="flex  w-full items-center gap-1">
                                     <FaEdit className="mx-auto cursor-pointer" color="green" />
                                     <FaTrash  onClick={() => handleDeleteUser(item.clerkId)} className="mx-auto cursor-pointer" color="red" />
                                 </div>
                            </td>
                        </tr>
                         ))}
                        
                       
                    </tbody>
                 </table>
</>
  )
}

export default UsersTableList