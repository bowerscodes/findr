import { z } from 'zod';
import { calculateAge } from '../util';

export const registerSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters long"
  }).max(50, {
    message: "Name must be a maximum of 50 characters long"
  }),

  email: z.string().min(6, {
    message: "Email must be at least 6 characters long"
  }).max(100, {
    message: "Email must be a maximum of 100 characters long"
  }).max(100).email(),

  password: z.string().min(8, {
    message: "Password must be at least 8 characters long"
  }).max(30, {
    message: "Password must be a maximum of 30 characters long"
  })
});

export const profileSchema = z.object({
  gender: z.string().min(2),
  description: z.string().min(10),
  city: z.string().min(1),
  country: z.string().min(2),
  dateOfBirth: z.string().min(1, {
    message: "Date of birth is required"
  }).refine(dateString => {
    const age = calculateAge(new Date(dateString));
    return age >= 18;
  }, {
    message: "You must be at least 18 to use this app"
  }),
});

export const combinedRegisterSchema = registerSchema.and(profileSchema);

export type ProfileSchema = z.infer<typeof profileSchema>;

export type RegisterSchema = z.infer<typeof registerSchema & typeof profileSchema>;
