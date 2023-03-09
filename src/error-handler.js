import { displayLoading, content } from "./content";


export const error = document.querySelector(".error");


export function errorHandler() {
    content.style.visibility = "hidden";
    error.style.display = "grid";
}
