import mongoose, { Document, Schema, Model, model } from "mongoose";


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
const imageSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  // url:[ {
  //   type: String,
  //   required: true,
  // }],
  colors: [colorSchema], // Array of color schemas for each image
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
    price: {
      type: Number,
      required: true,
    },
    prevPrice: {
      type: Number,
      required: true,
    },
    isNewProduct: {
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
    images: [imageSchema], // Array of image schemas
    
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
