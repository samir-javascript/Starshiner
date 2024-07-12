import { IUser } from "@/schemas/userModel";

export interface DeleteUserParams {
    clerkId: string;
}


export interface OrderItem {
    _id: string;
    shippingAddress: {
        city: string
        country: string
        zipCode: string
        firstName: string
        lastName: string
        address: string
       
        phoneNumber: string
    }
    userId: {
        email: string
        username:string
    }
    totalAmount: number;
    deliveryStatus: string
    paymentMethode: string
   isPaid: boolean
}
export interface ProductProps {
    _id: string;
    name: string;
    price: number;
    selectedColor: string;
    filteredImages: any;
    selectedSize: string;
    prevPrice: number;
    qty: number;
    description: string;
    isNewProduct: boolean;
    numReviews: number;
    category: string;
    rating: number;
    reviews:  [];
    position: string;
    images: object[];
    createdAt: Date;

}
export interface ReviewProps {
    user: any;
    _id: string;
    name: string;
    comment: string;
    title: string;
    rating: number
}
export interface CreateUserParams {
    clerkId: string;
    name: string;
    username:string;
    email: string;
    picture: string;
}
export interface UpdateUserParams {
    clerkId: string;
    path: string;
    userData: Partial<IUser>
}
export interface UpdateProductParams {
    productId: string;
    name: string;
    description: string;
    images: object[];
    path: string;
    price: number;
    prevPrice: number;
    category: string;
    position: string;
}
interface Size {
    size: string;
    stock: number;
  }
 
  interface Color {
    color: string;
    sizes: Size[];
  }
 
 export interface ImageDetails {
    url: string[];
    colors: Color[];
  }
  export interface ProductTypes {
     _id:string;
     name:string;
     description:string;
     category:string;
     price: number;
     prevPrice: number;
     isNewProduct: boolean;
     numReviews: number;
     rating: number;
     position:string;
     reviews: {
          user:any;
          title: string
          name:string
          rating: number
     }[];
      questions: {
          user:any
          name:string
          question:string
      }[]
      images: ImageDetails[]
      createdAt: Date
      updatedAt: Date
  }
export interface CreateProductParams {
     name: string;
     description: string;
     price: number;
     prevPrice: number;
     category: string;
     path: string;
     images: ImageDetails[];
    
     position:string;
}