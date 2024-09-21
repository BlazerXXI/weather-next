"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getWeatherData } from "../api";
import {
	ForecastData,
	ForecastListData,
	WeatherContextType,
	WeatherData,
} from "../types/types";
import { DefaultWeatherData } from "../constants";

const WeatherContext = createContext<WeatherContextType>({
	currentWeather: DefaultWeatherData,
	hourlyForecast: [],
	place: DefaultWeatherData.name,
	setPlace: () => {},
	loading: true,
});

function WeatherProvider({ children }: { children: React.ReactNode }) {
	const [place, setPlace] = useState<string>(() => {
		if (typeof window !== "undefined") {
			return localStorage.getItem("place") || DefaultWeatherData.name;
		} else {
			return DefaultWeatherData.name;
		}
	});
	const [loading, setLoading] = useState<boolean>(true);
	const [currentWeather, setCurrentWeather] =
		useState<WeatherData>(DefaultWeatherData);
	const [hourlyForecast, setHourlyForecast] = useState<ForecastListData[]>([]);

	useEffect(() => {
		const _getWeatherData = async () => {
			setLoading(true);
			try {
				const cw: WeatherData = await getWeatherData("weather", place);
				setCurrentWeather(cw);

				const df: ForecastData = await getWeatherData("forecast", place);

				if (Array.isArray(df.list)) {
					setHourlyForecast(df.list);
				} else {
					console.error("Forecast data is not an array");
				}
			} catch (error) {
				console.error("Error fetching weather data: ", error);
			} finally {
				setLoading(false);
			}
		};
		_getWeatherData();
	}, [place]);

	useEffect(() => {
		if (place) {
			localStorage.setItem("place", place);
		}
	}, [place]);

	return (
		<WeatherContext.Provider
			value={{ currentWeather, hourlyForecast, place, setPlace, loading }}
		>
			{children}
		</WeatherContext.Provider>
	);
}

function useWeather() {
	const context = useContext(WeatherContext);
	if (!context) {
		throw new Error("useWeather must be used within a WeatherProvider");
	}
	return context;
}

export { WeatherProvider, useWeather };
export default WeatherContext;
