const apiKey = "108cd6e86818647f4c9d5af62b5fe464";
const city = "Kharkiv";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`;

export const checkWeather = async () => {
	const response = await fetch(apiUrl + `&appid=${apiKey}`);
	const data = await response.json();

	console.log(data);
};
