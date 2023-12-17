const api = {
    key:'6841e7c63f644da58b3fa23f7de707a6',
    base:`https://api.geoapify.com/v1/ipinfo?apiKey=`
};

let link = `${api.base}${api.key}`;

let object = await fetch(link);
let locationJSON = await object.json();
let city = locationJSON.city.name;

export {city};



