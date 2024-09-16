export const checkWeather = async (city: string) => {
	const apiKey = process.env.WEATHER_APP_API_KEY;
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`;
	const response = await fetch(apiUrl + `&appid=${apiKey}`);
	const data = await response.json();

	console.log(data);
};
