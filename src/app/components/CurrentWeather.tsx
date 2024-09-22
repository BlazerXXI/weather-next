"use client";
import React from "react";
import CurrentWeatherWidget from "./CurrentWeatherWidget";
import CurrentWeatherInfo from "./CurrentWeatherInfo";
import { WeatherData } from "../types/types";

const CurrentWeather = ({
	currentWeather,
}: {
	currentWeather: WeatherData;
}) => {
	return (
		<div className=" w-full h-full rounded-3xl flex max-md:flex-col md:flex-wrap justify-between gap-6 ">
			<CurrentWeatherWidget currentWeather={currentWeather} />
			<CurrentWeatherInfo currentWeatherInfo={currentWeather} />
		</div>
	);
};

export default CurrentWeather;
