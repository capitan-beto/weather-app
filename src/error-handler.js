import { displayLoading, content } from "./content";


export const error = document.querySelector(".error");
// let msg = document.createElement("h1");
// msg.classList.add("error");
// msg.textContent = "Ups! Looks like something went wrong";

export function errorHandler() {
    content.style.visibility = "hidden";
    error.style.display = "grid";


    // error.append(msg);
}
