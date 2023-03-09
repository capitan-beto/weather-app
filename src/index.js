import "./style.css";
import { getUserLocation, getWeather } from "./data.js";
import * as content from "./content.js";
import * as search from "./search.js";
import * as bground from "./bground.js";
import * as fiveDays from "./five-days.js"


getUserLocation();

submit.addEventListener("click", () => { search.getCity() });

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 13 && !search.input.value == ""){
        search.getCity();
    }
})
