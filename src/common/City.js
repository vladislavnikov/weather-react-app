export default async function GetCity(){
    const api = {
        key: { api.key} ,
        base:`https://api.geoapify.com/v1/ipinfo?apiKey=`
    };
    
    let link = `${api.base}${api.key}`;
    
    let object = await fetch(link);
    let locationJSON = await object.json();
    let city = locationJSON.city.name;

    return city;
}
