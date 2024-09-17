import axios from "axios";

const API_KEY = "108cd6e86818647f4c9d5af62b5fe464";

export const checkWeather = async (city: string) => {
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`;
	const response = await axios.get(apiUrl, {
		params: {
			appid: API_KEY,
		},
	});
	console.log("response.data: ", response.data);
	return response.data;
};
