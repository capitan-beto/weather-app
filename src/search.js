import { distributeData } from "./content";

export let input = document.querySelector("#search");
export let submit = document.querySelector("#submit");

export function getCity() {
    const city = input.value;
    distributeData(city);
}

