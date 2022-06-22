//
import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Escribe un email valido.')
    .required('El correo es requerido.'),
  password: yup
    .string()
    .min(5, 'Contraseña muy corta!')
    .max(100, 'Cotraseña muy larga!')
    .required('Contraseña es requerida.')
})