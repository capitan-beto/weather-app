import { getBground } from "./bground";
import { getWeather } from "./data";

export const content = document.querySelector(".content");

export async function distributeData(city) {
    try {
        displayLoading();
        const data = await getWeather(city);
        getBground(data);
        showTitle(data, content);
        showTemp(data, content);
        displayLoading();
    }
    catch (err) {
        alert(err);
        displayLoading();
    }
};

function showTitle(data, parent) {
    const title = document.querySelector(".title");
    title.textContent = data.name;
};

function showTemp(data, parent) {
    const currTemp = document.querySelector(".curr-temp")
    const maxTemp = document.querySelector(".max-temp");
    const minTemp = document.querySelector(".min-temp")

    currTemp.textContent = `${data.main.temp}°`;
    maxTemp.textContent = `Max: ${data.main.temp_max}°`;
    minTemp.textContent = `Min: ${data.main.temp_min}°`;
}




function displayLoading() {
    let div = document.querySelector(".loading");
    if(div.className.includes("visible")) {
        div.classList.remove("visible");
    } else{
        div.classList.add("visible");
    }
};
