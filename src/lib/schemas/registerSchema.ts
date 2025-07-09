import { z } from 'zod';

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

export type RegisterSchema = z.infer<typeof registerSchema>;
