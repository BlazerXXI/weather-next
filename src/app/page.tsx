"use client";

import React from "react";
import CurrentWeather from "./components/CurrentWeather";
import HourlyForecast from "./components/HourlyForecast";
import { useWeather } from "./context/weather.context";

export default function Home() {
	const { currentWeather, hourlyForecast } = useWeather();

	return (
		<>
			<CurrentWeather currentWeather={currentWeather} />
			<HourlyForecast hourlyForecast={hourlyForecast} />
		</>
	);
}
