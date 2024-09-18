"use client";
import React from "react";
import CurrentWeatherWidget from "./CurrentWeatherWidget";
import CurrentWeatherInfo from "./CurrentWeatherInfo";

const MainWeather = () => {
	return (
		<div className=" w-full h-full min-h-[80vh] rounded-3xl grid grid-cols-1 md:grid-cols-2 grid-rows-3 md:grid-rows-2 gap-6 ">
			<CurrentWeatherWidget />
			<CurrentWeatherInfo />
		</div>
	);
};

export default MainWeather;
