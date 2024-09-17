"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { checkWeather } from "../api";
import { WeatherContextType, WeatherData } from "../types/types";

const DefaultWeatherData: WeatherData = {
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
	name: "Unknown",
	cod: 200,
};

const WeatherContext = createContext<WeatherContextType>({
	data: DefaultWeatherData,
	place: "",
	setPlace: () => {},
	isLoading: true,
});
function WeatherProvider({ children }: { children: React.ReactNode }) {
	const [data, setData] = useState<WeatherData>(DefaultWeatherData);
	const [place, setPlace] = useState<string>(() => {
		if (typeof window !== "undefined") {
			return localStorage.getItem("place") || "";
		} else {
			return "";
		}
	});
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const response = await checkWeather(place);
				setData(response);
			} catch (e) {
				console.error("Error fetching weather data:", e);
			} finally {
				setIsLoading(false);
			}
		};
		if (place) {
			fetchData();
		}
	}, [place]);

	useEffect(() => {
		if (place) {
			localStorage.setItem("place", place);
		}
	}, [place]);

	return (
		<WeatherContext.Provider value={{ data, place, setPlace, isLoading }}>
			{children}
		</WeatherContext.Provider>
	);
}

function useLoading() {
	const context = useContext(WeatherContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
}

export { WeatherProvider, useLoading };
export default WeatherContext;
