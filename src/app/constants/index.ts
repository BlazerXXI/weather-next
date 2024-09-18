import { WeatherData } from "../types/types";

export const DefaultWeatherData: WeatherData = {
	coord: {
		lat: 0,
		lon: 0,
	},
	weather: [
		{
			id: 0,
			main: "Clear",
			description: "clear sky",
			icon: "01d",
		},
	],
	base: "stations",
	main: {
		temp: 273.15,
		feels_like: 273.15,
		temp_min: 273.15,
		temp_max: 273.15,
		pressure: 1013,
		humidity: 0,
		sea_level: 1013,
		grnd_level: 1000,
	},
	visibility: 10000,
	wind: {
		speed: 0,
		deg: 0,
		gust: 0,
	},
	clouds: {
		all: 0,
	},
	dt: 0,
	sys: {
		type: 1,
		id: 0,
		country: "US",
		sunrise: 0,
		sunset: 0,
	},
	timezone: 0,
	id: 0,
	name: "London",
	cod: 200,
};
