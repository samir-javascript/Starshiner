import mongoose, { Document, Schema, Model, model } from "mongoose";

// Define the IProduct interface
// export interface IProduct extends Document {
//   name: string;
//   description: string;
//   images: string[];
//   price: number;
//   prevPrice: number;
//   isNew: boolean;
//   numReviews: number;
//   rating: number;
//   reviews: {
//     user: mongoose.Schema.Types.ObjectId;
//     title: string;
//     name: string;
//     rating: number;
//     comment: string;
//   }[];
//   colors: {
//     color: string;
//     sizes: {
//       size: string;
//       stock: number;
//     }[];
//   }[];
//   position: string;
//   category: string;
// }

// Define the review schema
const reviewSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

// Define the size schema
const sizeSchema = new Schema({
  size: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    default: 0,
  },
});

// Define the color schema
const colorSchema = new Schema({
  color: {
    type: String,
    required: true,
  },
  sizes: [sizeSchema], // Array of size schemas for each color
});

// Define the product schema
const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    colors: [colorSchema],
    price: {
      type: Number,
      required: true,
    },
    prevPrice: {
      type: Number,
      required: true,
    },
    isNew: {
      type: Boolean,
      default: false,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
   
    rating: {
      type: Number,
      default: 0,
    },
    position: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    images: [
      {
        type: String,
        required: true,
      },
    ],
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create and export the Product model
const Product = mongoose.models.Product || model("Product", productSchema);
export default Product;
