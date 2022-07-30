import * as yup from "yup";

export const userSchema = () =>
  yup
    .object({
      email: yup.string().email("Email no valido").required("Email Requerido"),
      username: yup
        .string()
        .typeError("Caracteres ingresados no validos")
        .required("El nombre es requerido"),
      userRole: yup
        .string()
        .typeError("Caracteres ingresados no validos")
        .required("El apellido es requerido"),
      password: yup
        .string()
        .typeError("Caracteres ingresados no validos")
        .required("El apellido es requerido"),
    })
    .required();
