import { IUser } from "@/schemas/userModel";

export interface DeleteUserParams {
    clerkId: string;
}

export interface ProductProps {
    _id: string;
    name: string;
    price: number;
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
export interface CreateProductParams {
     name: string;
     description: string;
     price: number;
     prevPrice: number;
     category: string;
     path: string;
     images: string;
     colors: object[];
     position:string;
}