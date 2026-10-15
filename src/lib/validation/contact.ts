import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(80, "Name is too long"),
  email: z.email("Enter a valid email address").max(160, "Email is too long"),
  subject: z
    .string()
    .trim()
    .min(3, "Please add a short subject")
    .max(120, "Subject is too long"),
  message: z
    .string()
    .trim()
    .min(20, "Please provide at least 20 characters")
    .max(2000, "Message is too long"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
