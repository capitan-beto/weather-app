import { displayLoading } from "./content";


export function errorHandler() {
    let msg = document.createElement("h1");
    msg.classList.add("error");
    msg.textContent = "Ups! Looks like something went wrong";

    document.querySelector(".content").append(msg);
}
