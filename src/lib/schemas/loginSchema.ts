import { z } from 'zod';

export const loginSchema = z.object({
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

export type LoginSchema = z.infer<typeof loginSchema>;
