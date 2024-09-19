import axios from "axios";

const API_KEY = "abed9665e7ac4c13cb085a5db97e3826";

export const checkWeather = async (city: string) => {
	if (!city) {
		return null;
	}
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`;
	const response = await axios.get(apiUrl, {
		params: {
			appid: API_KEY,
		},
	});
	return response.data;
};
