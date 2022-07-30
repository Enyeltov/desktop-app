import tinydate from "tinydate";
import { ipcRenderer } from "electron";

export function convertDate(string, format) {
  const foodate = new Date(string);
  const formatter = tinydate(format);
  return formatter(foodate);
}

export function getAge(dateString) {
  if (dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  } else {
    return null;
  }
}

export async function updateRegistry(user, router, config, data, id, serviceRoute) {
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
      const response = await fetch(`${apiUrl}${serviceRoute}/${id}`, requestOptions);
      if (response.status === 200 || response.status === 201) {
          const data = await response.json();
          return data
      } else {
        if (response.status >= 400) {
          console.log(response);
          throw response;
        } else {
          return false;
        }
      }
  } catch (error) {
    console.log(error);
    error.json().then((body) => {
      if (body.message instanceof Array){
        ipcRenderer.invoke('showDialog', ...body.message)
        } else {
        ipcRenderer.invoke('showDialog', body.message)
      }         
    });
    return false;
  }
}

export async function deleteRegistry(user, router, config, id, serviceRoute) {
  if (!user.token) {
    router.push("/auth");
  }

  const apiUrl = config.apiUrl();
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${user.token}`);
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };

  console.log(requestOptions, "requestOptions");

  try {
    const response = await fetch(
      `${apiUrl}${serviceRoute}/${id}`,
      requestOptions
    );
    if (response.status === 201) {
      const data = await response.json();
      return data;
    } else {
      if (response.status >= 400) {
        console.log(response);
        throw response;
      } else {
        return false;
      }
    }
  } catch (error) {
    console.log(error);
    error.json().then((body) => {
      ipcRenderer.invoke("showDialog", body.message);
    });
    return false;
  }
}

export async function getTableData(user, router, config, serviceRoute, filterFunction) {
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
