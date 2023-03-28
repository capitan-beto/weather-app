export function getBground(data) {
    let main = data.weather[0].main;
    let id = data.weather[0].icon.includes("d");

    if (main == "Thunderstorm" || main == "Snow") {
        if (main == "Thunderstorm"){
            setBground("thunderstorm");
            setIcon("thunderstorm");   
        } else  {
            setBground("snow");
            setIcon("snow");   
        }

    } else if(main == "Clouds") {
        setBground("clouds");
        if (!id) setIcon("clouds-night");
        else setIcon("clouds-day");

    } else if (main == "Clear") {
        if(!id) {
            setBground("clear-night");
            setIcon("clear-night");
        } else {
            setBground("clear-day");
            setIcon("clear-day");
        }

    } else if(main == "Rain") {
        if (!id) {
            setBground("rain-night");
            setIcon("rain");
        } else {
            setBground("rain-day");
            setIcon("rain");
        }
    }
};

function setBground(id) {
    document.body.id = id;
    document.body.style.backgroundSize = "cover";
};

function setIcon(id) {
    const icon = document.querySelector(".icon")
    icon.id = `icon-${id}`;
    icon.style.backgroundRepeat = "no-repeat";
    icon.style.backgroundSize = "100%"
}   

