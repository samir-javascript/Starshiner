import mongoose from "mongoose"
const ShippingModel = new mongoose.Schema({
    lastName: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
   phoneNumber: {
    type: String,
    required: true
   },
   country: {
    type: String,
    required: true
   },
   city: {
    type: String,
    required: true
   },
   zipCode: {
    type: String,
    required: true
   },
   address: {
    type: String,
    required: true
   }
})
const Shipping = mongoose.models.Shipping || mongoose.model("Shipping", ShippingModel)
export default Shipping