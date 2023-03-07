import { distributeData } from "./content";

let input = document.querySelector("#search");
let submit = document.querySelector("#submit");

function getCity() {
    const city = input.value;
    distributeData(city);
}

submit.addEventListener("click", () => { getCity() })