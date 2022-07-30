export async function updateClient(user, router, config, data, clientId) {
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
        const response = await fetch(`${apiUrl}/clients/${clientId}`, requestOptions);
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