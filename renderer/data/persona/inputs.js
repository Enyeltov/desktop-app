import { convertDate } from "../../features/utils";

export function getPersonInputData(register, errors, classes, data = null) {
  console.log(data, 'test');
    return [
        {
            id: 5,
            name: "document",
            type: "text",
            placeholder: "",
            register,
            errors,
            text: "Documento",
            classes,
            defaultValue: data ? data.Persons.document : null
          },
          {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "",
            register,
            errors,
            text: "Correo Electronico",
            classes,
            defaultValue: data ? data.Persons.email : null
          },
          {
            id: 2,
            name: "name",
            type: "text",
            placeholder: "",
            register,
            errors,
            text: "Nombres",
            classes,
            defaultValue: data ? data.Persons.name : null
          },
          {
            id: 3,
            name: "lastName",
            type: "text",
            placeholder: "",
            register,
            errors,
            text: "Apellidos",
            classes,
            defaultValue: data ? data.Persons.lastName : null
          },
          {
            id: 6,
            name: "birthDate",
            type: "date",
            placeholder: "",
            register,
            errors,
            text: "Fecha de Nacimiento",
            classes,
            defaultValue: data ? convertDate(data.Persons.birthDate, '{YYYY}-{MM}-{DD}') : null
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
            classes,
            defaultValue: data ? data.Persons.phone : null
          },
    ]
}