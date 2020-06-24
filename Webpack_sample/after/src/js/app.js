import celsius from "./modules/celsius";
import fahrenheit from "./modules/fahrenheit";

const celsTemp = celsius(26);
const fahrTemp = fahrenheit(35);

document.body.innerHTML = `<p>${celsTemp} ${fahrTemp}</p>`
