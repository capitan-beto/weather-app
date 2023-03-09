export async function getDaysWeather() {
    const result = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=-31.3815586&lon=-62.8289642&appid=12ba82103cee621b422b9bd770104e91&units=metric")
    const fore = await result.json();
    console.log(fore);
}

getDaysWeather();