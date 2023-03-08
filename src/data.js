import { distributeData } from "./content";

export async function getWeather(city) {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=12ba82103cee621b422b9bd770104e91`);
        if (!response.ok) {
            console.log("city not found")
        }
        const weatherData =  await response.json();
        return weatherData;
    } catch(error) {
        distributeData("Buenos Aires");
    }
}

export  async function getUserLocation() {
    const options = {
        enableHighAccuracy: true,
        timeout: 3000,
        maximumAge: 0,
    };

    const success = async (resp) => {
        let lat = await resp.coords.latitude;
        let long = await resp.coords.longitude;
        getUserCity(lat, long);
    };

    const error = (error) => { distributeData("Buenos Aires") };

    navigator.geolocation.getCurrentPosition(success, error, options);
}

export async function getUserCity(lat, long) {
    try {
        let response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyBh3Cq_gKvdOZZdssYD9D4gdYf18WPd7L8`, {mode: "cors"});
        let data = await response.json();
        distributeData(data.results[0].address_components[2].long_name);
    } catch (error) {
        distributeData("Buenos Aires");
    }
}

