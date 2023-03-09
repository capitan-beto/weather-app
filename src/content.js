import { getBground } from "./bground";
import { getWeather } from "./data";
import { format } from 'date-fns'
import { getDaysWeather } from "./five-days";

export const content = document.querySelector(".content");

export async function distributeData(city) {
    try {
        displayLoading();
        const data = await getWeather(city);
        await getDaysWeather(data);
        getBground(data);
        displayToFunctions(data)
        displayLoading();
    }
    catch (err) {
        alert(err);
        displayLoading();
    }
};

function displayToFunctions(data){
    displayTitle(data);
    DisplayTemp(data);
    displayMain(data);
    displayWind(data);
    displayDate();
}

function displayTitle(data) {
    const title = document.querySelector(".title");
    title.textContent = `${data.name}, ${data.sys.country}`;
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

function displayWind(data) {
    const wind = document.querySelector(".wind");
    wind.textContent = `Wind: ${data.wind.speed}m/s`;
}

function displayDate() {
    const day = document.querySelector(".day");
    const date = document.querySelector(".date");
    day.textContent = format(new Date, 'eeee');
    date.textContent = format(new Date, "dd/MM/yyyy");

}

function displayLoading() {
    let div = document.querySelector(".loading");
    if(div.className.includes("visible")) {
        div.classList.remove("visible");
    } else{
        div.classList.add("visible");
    }
};
