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

export async function updateAgent(user, router, config, data, agentId) {
    console.log(data, 'updateData');
    if (!user.token) {
        router.push("/auth")
    }

    const apiUrl = config.apiUrl();
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${user.token}`);
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: "PATCH",
        headers: myHeaders,
        redirect: "follow",
        body: JSON.stringify(data),
    };

    console.log(requestOptions, 'requestOptions');

    try {
        const response = await fetch(`${apiUrl}/agents/${agentId}`, requestOptions);
        if (response.status === 200 || response.status === 201) {
            const data = await response.json();
            return data
        } else {
            return false
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}