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
		temp: 27.15,
		feels_like: 27.15,
		temp_min: 27.15,
		temp_max: 27.15,
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

export const hourlyDate = (hour: string) => {
	const date = new Date(hour).toLocaleDateString();
	if (date === new Date().toLocaleDateString()) {
		return "Now";
	}
	return date;
};

export const hourlyTime = (hour: number) => {
	const time = new Date(hour * 1000).toLocaleTimeString().slice(0, 5);
	return time;
};

export const otherInfoWidgets = (
	humidity: number,
	pressure: number,
	windSpeed: number,
	rain: number,
	visibility: number,
	clouds: number
) => {
	return [
		{
			id: 0,
			icon: "droplet",
			name: "Humidity",
			value: Math.round(humidity),
			unit: "%",
		},
		{
			id: 1,
			icon: "moisture",
			name: "Pressure",
			value: (pressure / 1013).toFixed(2),
			unit: "atm",
		},
		{
			id: 2,
			icon: "wind",
			name: "WindSpeed",
			value: Math.round(windSpeed * 3.6),
			unit: "km/h",
		},
		{
			id: 3,
			icon: "cloud-rain-fill",
			name: "Rain",
			value: rain,
			unit: "mm",
		},
		{
			id: 4,
			icon: "eye",
			name: "Visibility",
			value: visibility === 10000 ? "> 10" : Math.round(visibility / 1000),
			unit: "km",
		},
		{
			id: 5,
			icon: "clouds-fill",
			name: "Clouds",
			value: Math.round(clouds),
			unit: "%",
		},
	];
};
