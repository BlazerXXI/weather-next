"use client";

import React from "react";
import CurrentWeather from "./components/CurrentWeather";
import HourlyForecast from "./components/HourlyForecast";
import DailyForecast from "./components/DailyForecast";
import { useWeather } from "./context/weather.context";

export default function Home() {
	const { currentWeather, hourlyForecast, dailyForecast } = useWeather();

	return (
		<>
			<CurrentWeather currentWeather={currentWeather} />
			{hourlyForecast.length > 0 && (
				<HourlyForecast hourlyForecast={hourlyForecast} />
			)}
			{dailyForecast.length > 0 && (
				<DailyForecast dailyForecast={dailyForecast} />
			)}
		</>
	);
}
