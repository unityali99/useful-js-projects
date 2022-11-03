import Cookies from "js-cookie";

// To set a value and it's name
Cookies.set("name", "value");

// To get a value via it's name
let userInformation = Cookies.get("name");

console.log(userInformation);
