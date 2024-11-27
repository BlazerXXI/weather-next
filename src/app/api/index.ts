import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const getWeatherData = async (endpoint: string, place: string) => {
	if (!place) {
		return null;
	}
	const apiUrl = `https://api.openweathermap.org/data/2.5/${endpoint}?units=metric&q=${place}&appid=${process.env.NEXT_PUBLIC_API_KEY_OPEN_WEATHER}`;
	const response = await axios.get(apiUrl);
	return response.data;
};
