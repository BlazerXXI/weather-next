"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { checkWeather } from "../api";
import { WeatherContextType, WeatherData } from "../types/types";
import { DefaultWeatherData } from "../constants";

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
			return localStorage.getItem("place") || DefaultWeatherData.name;
		} else {
			return DefaultWeatherData.name;
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
