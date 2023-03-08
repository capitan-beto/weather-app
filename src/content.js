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

    parent.appendChild(title);
};

function showTemp(data, parent) {
    const currTemp = document.querySelector("curr-temp")
    console.log(typeof data.main.temp)
    // currTemp.textContent = data.main.temp.toString();;

    parent.append(currTemp);
}




function displayLoading() {
    let div = document.querySelector(".loading");
    if(div.className.includes("visible")) {
        div.classList.remove("visible");
    } else{
        div.classList.add("visible");
    }
};
