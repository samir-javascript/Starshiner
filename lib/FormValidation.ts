import { z } from "zod";

export const ShippingAddressValidationSchema = z.object({
    lastName: z.string().min(2, {
        message: "Last name must be at least 2 characters.",
    }),
    firstName: z.string().min(2, {
        message: "First name must be at least 2 characters.",
    }),
    address: z.string().min(5, {
        message: "Address must be at least 5 characters.",
    }),
    country: z.string().min(2, {
        message: "Country must be at least 2 characters.",
    }),
    city: z.string().min(2, {
        message: "City must be at least 2 characters.",
    }),
    phoneNumber: z.string()
        .regex(/^\d{10}$/, { message: "Invalid phone number" })
        .nonempty({ message: "Phone number is required" }),
    zipCode: z.string().min(4, {
        message: "Zip code must be at least 4 characters.",
    }).max(10, {
        message: "Zip code must be no more than 10 characters.",
    }),
});
