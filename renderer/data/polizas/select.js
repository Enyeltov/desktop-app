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
            text: "Clientes",
            defaultValue : polizas?.ClientHasPolicies[0].clientId
        },
        {
            id: 30,
            classes,
            register,
            errors,
            name: 'agentId',
            text: "Agentes",
            defaultValue : polizas?.AgentContracts[0].agentId
        },
        {
            id: 31,
            classes,
            register,
            errors,
            name: 'policyStatusId',
            text: "Estado de la Poliza",
            defaultValue : polizas?.policyStatusId
        },
        {
            id: 32,
            classes,
            register,
            errors,
            name: 'relationId',
            text: "Relacion a poliza",
            defaultValue : polizas?.ClientHasPolicies[0].relationId
        },
        {
            id: 33,
            classes,
            register,
            errors,
            name: 'periodicityId',
            text: "Periodicidad",
            defaultValue : polizas?.ClientHasPolicies[0].ClientHasTaker[0].PolicyDetails[0].periodicityId
        },
        {
            id: 34,
            classes,
            register,
            errors,
            name: 'currencyId',
            text: "Moneda",
            defaultValue: polizas?.ClientHasPolicies[0].ClientHasTaker[0].PolicyDetails[0].currencyId
        }
    ]
}