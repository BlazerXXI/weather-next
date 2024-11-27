"use client";

import React from "react";
import CurrentWeather from "./components/CurrentWeather";
import HourlyForecast from "./components/HourlyForecast";
import { useWeather } from "./context/weather.context";
import DailyForecast from "./components/DailyForecast";

export default function Home() {
	const { currentWeather, hourlyForecast, dailyForecast } = useWeather();

	return (
		<>
			<CurrentWeather currentWeather={currentWeather} />
			<HourlyForecast hourlyForecast={hourlyForecast} />
			<DailyForecast dailyForecast={dailyForecast} />
		</>
	);
}
