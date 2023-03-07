import { getWeather } from "./data";

export const content = document.querySelector(".content");

export async function distributeData(city) {
    const data = await getWeather(city);
    console.log(data)
    createTitle(data, content);
}

function createTitle(data, parent) {
    const title = document.querySelector(".title");
    title.textContent = data.name;
    parent.appendChild(title);
}

distributeData("Arizona");

