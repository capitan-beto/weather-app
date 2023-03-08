const images = {
    clearDay: {
        main: "Clear",
        src: "./assets/backgrounds/clear-day.jpg"

    },
    clearNight: {
        main: "Clear",
        src: "./assets/backgrounds/clear-night.jpg"
    },
    rainDay: {
        main: "Rain",
        src: "./assets/backgrounds/rain-day.jpg"
    },
    rainNight: {
        main: "Rain",
        src: "./assets/backgrounds/rain-night.jpg"
    },
    Thunderstorm: {
        main: "Thunderstorm",
        src: "./assets/backgrounds/thunderstorm.jpg"
    },
    Clouds: {
        main: "Clouds",
        src: "./assets/backgrounds/clouds.jpg"
    },
    Snow: {
        main: "Snow",
        src: "./assets/backgrounds/snow.jpg"
    }

}

export function getBground(data) {
    let main = data.weather[0].main;
    let id = data.weather[0].icon.includes("d");
    if (main === "Clouds" || main === "Thunderstorm" || main === "Snow") {
        console.log(`I'm havin' ${main} boy`);
    } else if (main == "Clear") {
        if(!id) {
            console.log("Clear Night!");
        } else {
            console.log("Clear Day!");
        }

    } else if(main == "Rain") {
        if (!id) {
            console.log("Raining Night!");
        } else {
            console.log("Rainy Day!!");
        }
    }
}

function setBground() {
    console.log()
}