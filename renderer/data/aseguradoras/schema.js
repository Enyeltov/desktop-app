import * as yup from "yup";

export const insuranceCarrierSchema = () => yup
.object({
    email: yup.string().email("Email no valido"),
    name: yup.string().typeError("Caracteres ingresados no validos").required("El nombre es requerido"),
    document: yup.number().typeError("Debe ingresar un numero").required("El Rif es Requerido"),
    phone: yup.string().typeError("Caracteres ingresados no validos"),
    account: yup.string().typeError("Caracteres ingresados no validos"),
    paymentLink: yup.string().typeError("Caracteres ingresados no validos"),
})
.required();