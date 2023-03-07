export async function getWeather(city) {
    try{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=12ba82103cee621b422b9bd770104e91`);
        const weatherData =  await response.json();
        console.log(weatherData);

    } catch(error) {
        console.error(error);
    }
}

getWeather("Buenos Aires");
