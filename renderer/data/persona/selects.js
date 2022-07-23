export function getPersonSelectData(register, errors, classes, data) {
    return [
            {
                id: 10,
                classes,
                register,
                errors,
                name: 'gender',
                text: "Genero",
                defaultValue: data ? data.Persons.gender : null
            },
            {
                id: 11,
                classes,
                register,
                errors,
                name: 'cityId',
                text: "Ciudad de Residencia",
                defaultValue: data ? data.Persons.Addresses.cityId : null
            }
    ]
}