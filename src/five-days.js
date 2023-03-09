import { addDays, format } from 'date-fns'

export async function getDaysWeather(data) {
    const result = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=12ba82103cee621b422b9bd770104e91&units=metric`);
    const forecast = await result.json();
    displayDays(forecast);
}

function displayDays(forecast){
    displayOne(forecast);
    displayTwo(forecast);
    displayThree(forecast);
    displayFour(forecast);
    displayFive(forecast);
}

function displayOne(forecast) {
    const date = document.querySelector(".date-one");
    const main = document.querySelector(".main-one");
    const max = document.querySelector(".max-one");
    const pop = document.querySelector(".pop-one");

    const day = addDays(new Date(forecast.list[3].dt_txt), 1);
    date.textContent = format(day, "eeee dd");
    main.textContent = forecast.list[3].weather[0].description;
    max.textContent = `Max: ${forecast.list[3].main.temp_max}°`;
    pop.textContent = `Rain probability: ${forecast.list[3].pop * 100}%`;
}

function displayTwo(forecast) {
    const date = document.querySelector(".date-two");
    const main = document.querySelector(".main-two");
    const max = document.querySelector(".max-two");
    const pop = document.querySelector(".pop-two");

    const day = addDays(new Date(forecast.list[11].dt_txt), 1);
    date.textContent = format(day, "eeee dd");
    main.textContent = forecast.list[11].weather[0].description;
    max.textContent = `Max: ${forecast.list[11].main.temp_max}°`;
    pop.textContent = `Rain probability: ${forecast.list[11].pop * 100}%`;
}

function displayThree(forecast) {
    const date = document.querySelector(".date-three");
    const main = document.querySelector(".main-three");
    const max = document.querySelector(".max-three");
    const pop = document.querySelector(".pop-three");

    const day = addDays(new Date(forecast.list[19].dt_txt), 1);
    date.textContent = format(day, "eeee dd");
    main.textContent = forecast.list[19].weather[0].description;
    max.textContent = `Max: ${forecast.list[19].main.temp_max}°`;
    pop.textContent = `Rain probability: ${forecast.list[19].pop * 100}%`;
}

function displayFour(forecast) {
    const date = document.querySelector(".date-four");
    const main = document.querySelector(".main-four");
    const max = document.querySelector(".max-four");
    const pop = document.querySelector(".pop-four");

    const day = addDays(new Date(forecast.list[27].dt_txt), 1);
    date.textContent = format(day, "eeee dd");
    main.textContent = forecast.list[27].weather[0].description;
    max.textContent = `Max: ${forecast.list[27].main.temp_max}°`;
    pop.textContent = `Rain probability: ${forecast.list[27].pop * 100}%`;
}

function displayFive(forecast){
    const date = document.querySelector(".date-five");
    const main = document.querySelector(".main-five");
    const max = document.querySelector(".max-five");
    const pop = document.querySelector(".pop-five");

    const day = addDays(new Date(forecast.list[35].dt_txt), 1);
    date.textContent = format(day, "eeee dd");
    main.textContent = forecast.list[35].weather[0].description;
    max.textContent = `Max: ${forecast.list[35].main.temp_max}°`;
    pop.textContent = `Rain probability: ${forecast.list[35].pop * 100}%`;
}

