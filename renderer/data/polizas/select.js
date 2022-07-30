export function getSelectPolizaData(register, errors, classes, polizas = null) {
    return [
        {
            id: 28,
            classes,
            register,
            errors,
            name: 'insuranceCarrierId',
            text: "Aseguradora",
            defaultValue : polizas?.InsuranceCarrierId
        },
        {
            id: 29,
            classes,
            register,
            errors,
            name: 'clientId',
            text: "Cliente",
            defaultValue : polizas?.ClientHasPolicies[0].clientId
        },
        {
            id: 30,
            classes,
            register,
            errors,
            name: 'agentId',
            text: "Agente",
            defaultValue : polizas?.AgentContracts[0].agentId
        },
        {
            id: 31,
            classes,
            register,
            errors,
            name: 'relationId',
            text: "Relacion de cliente a poliza",
            defaultValue : polizas?.ClientHasPolicies[0].relationId
        },
        {
            id: 32,
            classes,
            register,
            errors,
            name: 'policyStatusId',
            text: "Estado de la Poliza",
            defaultValue : polizas?.policyStatusId
        },
        {
            id: 33,
            classes,
            register,
            errors,
            name: 'periodicityId',
            text: "Periodicidad de Pago",
            defaultValue : polizas?.PolicyDetails[0].periodicityId
        },
        // {
        //     id: 34,
        //     classes,
        //     register,
        //     errors,
        //     name: 'currencyId',
        //     text: "Moneda",
        //     defaultValue: polizas?.ClientHasPolicies[0].ClientHasTaker[0].PolicyDetails[0].currencyId
        // }
    ]
}