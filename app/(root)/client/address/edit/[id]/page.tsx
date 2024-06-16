import React from 'react'
import { getShippingById} from "../../../../../../actions/user.actions"
const page = async({params}: {
    params: {
        id: string;
    }
}) => {
  const shipping = await getShippingById({id:params.id})

  return (
    <div>
       {shipping._id}
    </div>
  )
}

export default page