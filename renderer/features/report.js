export function filterInsurerReport(data) {
    return data.map((el, index) => {
        return {
            number : index + 1,
            aseguradora: el.aseguradora,
            ramo: el.ramo,
            net: el.primaNeta,
            total: el.primaTotal
        }
    })
}

export function filterClientReport(data) {
    return data.map((el, index) => {
        return {
            number : index + 1,
            name: `${el.name} ${el.lastName}`,
            document: `${el.documentTypeId == 1 ? 'V-' : 'J-'}${el.document}`,
            net: el.primaNeta,
            total: el.primaTotal
        }
    })
}

export function filterPeriodReport(data) {
    return data.map((el, index) => {
        return {
            number : index + 1,
            year: el.year,
            month: el.month,
            net: el.primaNeta,
            total: el.primaTotal
        }
    })
}