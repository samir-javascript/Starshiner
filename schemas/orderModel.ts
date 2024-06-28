import mongoose from "mongoose";
const OrderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true , ref: "User"},
    totalAmount: { type: Number,  },
    shippingAmount: { type: Number,  },
    paymentMethode: {
        type: String,
    },
    isPaid: {
        type: Boolean,
        default: false,
    },
    shippingAddress : {
      city: { type: String},
      country: {type: String},
      zipCode: { type: String},
      firstName: {type: String},
      lastName: {type: String},
      address: { type: String},
      phoneNumber: { type: String}
    },
    isDelivered: {
         type: Boolean,
         default: false
    },
    
    paidAt: {
        type: Date,
    },
    deliveredAt: {
        type: Date,
    },
    itemsPrice: {
        type: Number,
        default: 0.0,
        required: true
    },
   
    shippingPrice: {
        type: Number,
        default: 0.0
    },
  
    paymentStatus: { type: String },
    paymentIntent: { type: String} ,
    deliveryStatus: {
        type: String,
        enum: ['delivered', 'ordered', 'shipped'],
    },
    orderItems: [
        {
            name: { type: String },
            price: { type: Number },
            qty: { type: Number },
            selectedColor: { type: String},
            filteredImages: { type: Array },
            selectedSize: { type: String},
            images: [ {type: Object,}] ,
            
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            },
        },
    ],
}, {timestamps: true});

const OrderModel = mongoose.models.Order || mongoose.model('Order', OrderSchema);

export default OrderModel;
