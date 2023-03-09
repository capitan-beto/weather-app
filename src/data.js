import { distributeData } from "./content";
import { errorHandler } from "./error-handler";

export async function getWeather(city) {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=12ba82103cee621b422b9bd770104e91&units=metric`);
        if (!response.ok) {
            errorHandler();
        }
        const weatherData =  await response.json();
        return weatherData;
    } catch(error) {
        errorHandler();
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
        let response = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}8&lon=${long}&limit=2&appid=12ba82103cee621b422b9bd770104e91&units=metric`);
        let data = await response.json();
        distributeData(data[0].name);
    } catch (error) {
        console.warn(error);
        distributeData("Buenos Aires");
    }
}
