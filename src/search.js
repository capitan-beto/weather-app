import { distributeData } from "./content";
import { errorHandler, error} from "./error-handler";
import { content } from "./content.js"

export let input = document.querySelector("input");
export let submit = document.querySelector("#submit");

export function getCity() {
    if (content.style.visibility = "hidden"){
        content.style.visibility = "visible"
        error.style.display = "none";
    }
    if (input.validity.valueMissing) {
        input.setCustomValidity("You must type a city");
    } else {
        input.setCustomValidity("");
        const city = input.value;
        distributeData(city);
    }

    input.reportValidity();
}

