export function getPersonSelectData(register, errors, classes) {
    return [
            {
                id: 10,
                classes,
                register,
                errors,
                name: 'gender',
                text: "Genero",
            },
            {
                id: 11,
                classes,
                register,
                errors,
                name: 'cityId',
                text: "Ciudad de Residencia",
            }
    ]
}