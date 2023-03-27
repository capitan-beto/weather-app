export const images = {
    "clearDay": {
        main: "Clear",
        src: "../src/assets/backgrounds/clear-day.jpg",
        icon: "../src/assets/icons/clear-day.svg"
    },
    "clearNight": {
        main: "Clear",
        src: "../src/assets/backgrounds/clear-night.jpg",
        icon: "../src/assets/icons/clear-night.svg"
    },
    "rainDay": {
        main: "Rain",
        src: "../src/assets/backgrounds/rain-day.jpg",
        icon: "../src/assets/icons/rain.svg"
    },
    "rainNight": {
        main: "Rain",
        src: "../src/assets/backgrounds/rain-night.jpg",
        icon: "../src/assets/icons/rain.svg"
    },
    "Thunderstorm": {
        main: "Thunderstorm",
        src: "../src/assets/backgrounds/thunderstorm.jpg",
        icon: "../src/assets/icons/thunderstorm.svg"
    },
    "cloudsDay": {
        main: "Clouds",
        src: "../src/assets/backgrounds/clouds.jpg",
        icon: "../src/assets/icons/clouds-day.svg"
    },
    "cloudsNight": {
        main: "Clouds",
        src: "../src/assets/backgrounds/clouds.jpg",
        icon: "../src/assets/icons/clouds-night.svg"
    },
    "Snow": {
        main: "Snow",
        src: "../src/assets/backgrounds/snow.jpg",
        icon: "../src/assets/icons/snow.svg"
    }
};

export function getBground(data) {
    let main = data.weather[0].main;
    let id = data.weather[0].icon.includes("d");

    if (main == "Thunderstorm" || main == "Snow") {
        setBground(main);
        setIcon(main);

    } else if(main == "Clouds") {
        if(!id) {
            setBground("cloudsNight");
            setIcon("cloudsNight");
        } else {
            setBground("cloudsDay");
            setIcon("cloudsDay");
        }

    } else if (main == "Clear") {
        if(!id) {
            setBground("clearNight");
            setIcon("clearNight");
        } else {
            setBground("clearDay");
            setIcon("clearDay");
        }

    } else if(main == "Rain") {
        if (!id) {
            // setBground("rainNight")
            document.body.style.background = "../src/assets/backgrounds/clear-night.jpg";
            setIcon("rainNight");
        } else {
            setBground("rainDay");
            setIcon("rainDay");
        }
    }
};

function setBground(main) {
    document.body.style.background = `url(${images[main].src})`;
    document.body.style.backgroundSize = "cover";
};

function setIcon(main) {
    const icon = document.querySelector(".icon")
    icon.style.background = `url(${images[main].icon})`;
    icon.style.backgroundRepeat = "no-repeat";
    icon.style.backgroundSize = "100%"
}   

console.log("actually doing something");
