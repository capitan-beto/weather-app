const images = {
    clearDay: {
        main: "Clear",
        id: true,
    },
    clearNight: {
        main: "Clear",
        id: false
    },
    rainDay: {
        main: "Rain",
        id: true
    },
    rainNight: {
        main: "Rain",
        id: false
    },
    thunderstorm: {
        main: "Thunderstorm",
        id: false
    },
    clouds: {
        main: "Clouds",
        id: false
    },
    snow: {
        main: "Snow",
        id: false
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
    
}