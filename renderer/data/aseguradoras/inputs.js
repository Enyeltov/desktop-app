export function getInsuranceCarrierData(register, errors, classes, data = null)
{
    return [
        {
          id: 1,
          name: "document",
          type: "text",
          placeholder: "",
          register,
          errors,
          text: "RIF de la Empresa",
          classes,
          defaultValue: data ? data.document : null
        },
        {
          id: 2,
          name: "name",
          type: "text",
          placeholder: "",
          register,
          errors,
          text: "Nombre de la Empresa",
          classes,
          defaultValue: data ? data.name : null
        },
        {
          id: 3,
          name: "email",
          type: "email",
          placeholder: "",
          register,
          errors,
          text: "Correo Electronico",
          classes,
          defaultValue: data ? data.email : null
        },
        {
          id: 4,
          name: "phone",
          type: "text",
          placeholder: "0414-1234567",
          register,
          errors,
          text: "Telefono",
          pattern : '[0-9]{4}-[0-9]{7}',
          classes,
          defaultValue: data ? data.phone : null
        },
        {
          id: 5,
          name: "account",
          type: "text",
          placeholder: "",
          register,
          errors,
          text: "Cuenta Bancaria",
          classes,
          defaultValue: data ? data.account : null
        },
        {
          id: 6,
          name: "paymentLink",
          type: "text",
          placeholder: "",
          register,
          errors,
          text: "Link de Pago",
          classes,
          defaultValue: data ? data.paymentLink : null
        },
      ]
}