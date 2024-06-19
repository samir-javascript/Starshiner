import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    referenceId: { type: String, required: true, unique: true },
    cartItems: { type: Array, required: true },
    totalAmount: { type: Number, required: true },
    shippingAmount: { type: Number, required: true },
    shippingAddress: { type: Object, required: true }
}, { timestamps: true });

export const Cart = mongoose.models.Cart || mongoose.model('Cart', cartSchema);
