"use client";
import React from "react";
import CurrentWeatherWidget from "./CurrentWeatherWidget";
import CurrentWeatherInfo from "./CurrentWeatherInfo";
import { useWeather } from "../context/weather.context";

const CurrentWeather = () => {
	const { currentWeather, hourlyForecast } = useWeather();

	console.log("currentWeather: ", currentWeather);
	console.log("hourlyForecast: ", hourlyForecast);

	return (
		<div className=" w-full h-full rounded-3xl grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-6 ">
			<CurrentWeatherWidget currentWeather={currentWeather} />
			<CurrentWeatherInfo currentWeatherInfo={currentWeather} />
		</div>
	);
};

export default CurrentWeather;
