import { distributeData } from "./content";
import { errorHandler, inputValidation } from "./error-handler";

export let input = document.querySelector("input");
export let submit = document.querySelector("#submit");

export function getCity() {
    if (input.validity.valueMissing) {
        console.log(input.validity.valueMissing)
        input.setCustomValidity("You must type a city");
    } else {
        input.setCustomValidity("");
        const city = input.value;
        distributeData(city);
    }
    
    input.reportValidity();
}

