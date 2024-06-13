import { IUser } from "@/schemas/userModel";

export interface DeleteUserParams {
    clerkId: string;
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