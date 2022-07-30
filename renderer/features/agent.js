export async function getAgentGeneralData(user, router, config, serviceRoute, filterFunction) {
    if (!user.token) {
        router.push("/auth")
    }

    const apiUrl = config.apiUrl();
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${user.token}`);

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };

    try {
        const response = await fetch(`${apiUrl}/${serviceRoute}`, requestOptions);
        const data = await response.json();
        return filterFunction(data)
    } catch (error) {
        console.error(error);
        return;
    }
}

export function fileteredDocumentTypeData(data) {
    return data.map(el => {
        return {
            value: el.id,
            optionName: el.name
        }
    })
}