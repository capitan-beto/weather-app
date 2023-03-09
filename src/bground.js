export const images = {
    "clearDay": {
        main: "Clear",
        src: "../src/assets/backgrounds/clear-day.jpg"
    },
    "clearNight": {
        main: "Clear",
        src: "../src/assets/backgrounds/clear-night.jpg"
    },
    "rainDay": {
        main: "Rain",
        src: "../src/assets/backgrounds/rain-day.jpg"
    },
    "rainNight": {
        main: "Rain",
        src: "../src/assets/backgrounds/rain-night.jpg"
    },
    "Thunderstorm": {
        main: "Thunderstorm",
        src: "../src/assets/backgrounds/thunderstorm.jpg"
    },
    "cloudsDay": {
        main: "Clouds",
        src: "../src/assets/backgrounds/clouds.jpg"
    },
    "cloudsNight": {
        main: "Clouds",
        src: "../src/assets/backgrounds/clouds.jpg"
    },
    "Snow": {
        main: "Snow",
        src: "../src/assets/backgrounds/snow.jpg"
    }

}

export function getBground(data) {
    let main = data.weather[0].main;
    let id = data.weather[0].icon.includes("d");

    if (main == "Thunderstorm" || main == "Snow") {
        setBground(main);

    } else if(main == "Clouds") {
        if(!id) {
            setBground("cloudsNight");
        } else {
            setBground("cloudsDay");
        }

    } else if (main == "Clear") {
        if(!id) {
            setBground("clearNight");
        } else {
            setBground("clearDay");
        }

    } else if(main == "Rain") {
        if (!id) {
            setBground("rainNight")
        } else {
            setBground("rainDay");
        }
    }
}

function setBground(data) {
    document.body.style.background = `url(${images[data].src})`;
    document.body.style.backgroundSize = "cover";
}