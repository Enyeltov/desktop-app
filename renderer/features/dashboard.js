import { config } from "../../configs";

export async function getValues(token, route)
{
    const apiUrl = config.apiUrl();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      try {
        const response = await fetch(`${apiUrl}/${route}`, requestOptions);
        const data = await response.json();
        console.log(data, "data");
        return data;
      } catch (error) {
        console.error(error);
        return;
      }
}