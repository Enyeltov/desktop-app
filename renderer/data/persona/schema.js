import * as yup from "yup";

export const personSchema = () => yup
.object({
  email: yup.string().email("Email no valido").required("Email Requerido"),
  name: yup
    .string()
    .typeError("Caracteres ingresados no validos")
    .required("El nombre es requerido"),
  lastName: yup
    .string()
    .typeError("Caracteres ingresados no validos")
    .required("El apellido es requerido"),
  civilPolicyStatus: yup
    .string()
    .typeError("Caracteres ingresados no validos"),
  company: yup.string().typeError("Caracteres ingresados no validos"),
  birthDate: yup
    .date()
    .typeError("Debe ingresar una fecha")
    .required("La Fecha de Nacimiento es Requerida"),
  document: yup
    .number()
    .typeError("Debe ingresar un numero")
    .required("El documento es Requerido"),
  documentTypeId: yup
    .number()
    .typeError("Seleccione el tipo de documento")
    .required("El documento es Requerido"),
  phone: yup
    .string()
    .typeError("Caracteres ingresados no validos")
    .notRequired(),
  cityId: yup
    .number()
    .typeError("Seleccione una Ciudad")
    .required("La ciudad de residencia es requerida"),
})
.required();