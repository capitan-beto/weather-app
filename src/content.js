import { getBground } from "./bground";
import { getWeather } from "./data";

export const content = document.querySelector(".content");

export async function distributeData(city) {
    try {
        displayLoading();
        const data = await getWeather(city);
        getBground(data);
        createTitle(data, content);
        console.log(data);
        displayLoading();
    }
    catch (err) {
        alert(error);
    }
};

function createTitle(data, parent) {
    const title = document.querySelector(".title");
    title.textContent = data.name;
    parent.appendChild(title);
};


function displayLoading() {
    let div = document.querySelector(".loading");
    if(div.className.includes("visible")) {
        div.classList.remove("visible");
    } else{
        div.classList.add("visible");
    }
};
