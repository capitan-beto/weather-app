import "./style.css";
import { getUserLocation, getWeather } from "./data.js";
import * as content from "./content.js";
import * as search from "./search.js";
import * as bground from "./bground.js";

getUserLocation();

submit.addEventListener("click", () => { search.getCity() });

