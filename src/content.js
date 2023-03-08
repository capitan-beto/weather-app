import { getBground } from "./bground";
import { getWeather } from "./data";

export const content = document.querySelector(".content");

export async function distributeData(city) {
    try {
        displayLoading();
        const data = await getWeather(city);
        getBground(data);
        displayTitle(data);
        DisplayTemp(data);
        displayMain(data);
        displayLoading();
    }
    catch (err) {
        alert(err);
        displayLoading();
    }
};

function displayTitle(data) {
    const title = document.querySelector(".title");
    title.textContent = data.name;
};

function DisplayTemp(data) {
    const currTemp = document.querySelector(".curr-temp")
    const maxTemp = document.querySelector(".max-temp");
    const minTemp = document.querySelector(".min-temp")

    currTemp.textContent = `${data.main.temp}°`;
    maxTemp.textContent = `Max: ${data.main.temp_max}°`;
    minTemp.textContent = `Min: ${data.main.temp_min}°`;
}

function displayMain(data) {
    const main = document.querySelector(".main");
    main.textContent = data.weather[0].description;
}





function displayLoading() {
    let div = document.querySelector(".loading");
    if(div.className.includes("visible")) {
        div.classList.remove("visible");
    } else{
        div.classList.add("visible");
    }
};
