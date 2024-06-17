import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
    clerkId: string;
    firstName?: string;
    lastName?: string;
    isAdmin: boolean;
    name: string;
    username:string;
    email: string;
    picture: string;
    phoneNumber?: string;
    birthDay?: {
        day: number;
        month: number;
        year: number;
    };
    country?: string;
    isSubscribed: boolean;
    
    saved: string[];
    joinedAt: Date;
    shippingAddresses: string[]
 } 

 const userModel = new mongoose.Schema<IUser>({
     name: {
        type: String,
        required: true
     },
     clerkId: {
        type: String,
        required: true
     },
     isAdmin: {
        type: Boolean,
        default : false
     },
     username: {
        type: String,
        required: true
     },
     email: {
        type: String,
        unique: true,
        required: true
     },
     picture: {
        type: String
     },
     phoneNumber: {
        type: String,
     },
     country: {
        type: String
     },
     firstName: {
      type: String
     },
     lastName: {
        type: String,
     },
     isSubscribed: {
        type: Boolean,
        default: false
     },
     joinedAt: {
        type: Date,
        default: Date.now
     },
     birthDay: {
         day: {
            type: Number,
         },
         month:  {
            type: Number,
         },
         year: {
            type: Number
         }
         
     },

     shippingAddresses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Shipping"
     }],
     saved: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
     }]

 })
 const User = mongoose.models.User || mongoose.model<IUser>('User', userModel)
 export default User;