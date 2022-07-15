export function getPersonInputData(register, errors, classes) {

    return [
        {
            id: 5,
            name: "document",
            type: "text",
            placeholder: "",
            register,
            errors,
            text: "Documento",
            classes
          },
          {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "",
            register,
            errors,
            text: "Correo Electronico",
            classes
          },
          {
            id: 2,
            name: "name",
            type: "text",
            placeholder: "",
            register,
            errors,
            text: "Nombres",
            classes
          },
          {
            id: 3,
            name: "lastName",
            type: "text",
            placeholder: "",
            register,
            errors,
            text: "Apellidos",
            classes
          },
          {
            id: 6,
            name: "birthDate",
            type: "date",
            placeholder: "",
            register,
            errors,
            text: "Fecha de Nacimiento",
            classes
          },
          {
            id: 7,
            name: "phone",
            type: "tel",
            placeholder: "0414-1234567",
            register,
            errors,
            text: "Telefono",
            pattern : '[0-9]{4}-[0-9]{7}',
            classes
          },
    ]
}