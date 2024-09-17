"use client";

import { createContext, useEffect, useState } from "react";
import { checkWeather } from "../api";
import { WeatherData } from "../types/types";

type WeatherContextType = {
	data: WeatherData | null;
	place: string;
	setPlace: React.Dispatch<React.SetStateAction<string>>;
};

const WeatherContext = createContext<WeatherContextType | null>(null);

function WeatherProvider({ children }: { children: React.ReactNode }) {
	const [data, setData] = useState<WeatherData | null>(null);
	const [place, setPlace] = useState<string>(() => {
		if (typeof window !== "undefined") {
			return localStorage.getItem("place") || "";
		} else {
			return "";
		}
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await checkWeather(place);
				setData(response);
			} catch (e) {
				console.error("Error fetching weather data:", e);
			}
		};
		fetchData();
	}, [place]);

	useEffect(() => {
		if (place) {
			localStorage.setItem("place", place);
		}
	}, [place]);

	return (
		<WeatherContext.Provider value={{ data, place, setPlace }}>
			{children}
		</WeatherContext.Provider>
	);
}

export { WeatherProvider };
export default WeatherContext;
