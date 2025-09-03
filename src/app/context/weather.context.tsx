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
import {
	calculateDailySummary,
	groupForecastByDay,
} from "../utils/forecastUtils";
import useWeatherPlace from "../utils/hooks/useWeatherPlace";

const WeatherContext = createContext<WeatherContextType>({
	currentWeather: DefaultWeatherData,
	hourlyForecast: [],
	dailyForecast: [],
	place: DefaultWeatherData.name,
	setPlace: () => {},
	loading: true,
});

function WeatherProvider({ children }: { children: React.ReactNode }) {
	const { place, setPlace } = useWeatherPlace();
	const [loading, setLoading] = useState<boolean>(true);
	const [currentWeather, setCurrentWeather] =
		useState<WeatherData>(DefaultWeatherData);
	const [hourlyForecast, setHourlyForecast] = useState<ForecastListData[]>([]);
	const [dailyForecast, setDailyForecast] = useState<ForecastListData[]>([]);

	useEffect(() => {
		const _getWeatherData = async () => {
			setLoading(true);
			try {
				const cw: WeatherData = await getWeatherData("weather", place);
				setCurrentWeather(cw);
				const df: ForecastData = await getWeatherData("forecast", place);

				if (Array.isArray(df.list)) {
					const groupedData = groupForecastByDay(df.list);
					const dailySummary = calculateDailySummary(groupedData);

					setHourlyForecast(df.list);
					setDailyForecast(dailySummary);
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

	return (
		<WeatherContext.Provider
			value={{
				currentWeather,
				hourlyForecast,
				dailyForecast,
				place,
				setPlace,
				loading,
			}}
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
