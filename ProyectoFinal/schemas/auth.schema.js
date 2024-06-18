import z from 'zod';

export const registerSchema = z.object({
  username: z.string().min(3).max(50),
  email: z.string().email(),
  password: z.string().min(6),
  first_name: z.string().min(1).max(50),
  last_name: z.string().min(1).max(50),
});

module.exports = UserSchema;

export const loginSchema = z.object({
    email: z.string({
        required_error: "Se requiere email"
    }).email({
        required_error: "email invalido"
    }),
    password: z.string({
        required_error: "Constraseña Requerida"
    }).min(5, {
        message: "La contraseña debe tener minimo 5 caracteres"
    })
})