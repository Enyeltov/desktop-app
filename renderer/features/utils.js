import tinydate from "tinydate";

export function convertDate(string, format) {
    
    const foodate = new Date(string);
    const formatter = tinydate(format);
    return formatter(foodate);
}

export function getAge(dateString) 
{
    if (dateString){
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
    } else {
        return null;
    }
}