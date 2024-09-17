"use client";
import React from "react";
import { checkWeather } from "../api";
import MainWeatherWidget from "./MainWeatherWidget";

checkWeather("Kharkiv");

const MainWeather = () => {
	return (
		<div className=" w-full h-full min-h-[80vh] rounded-3xl grid grid-cols-1 md:grid-cols-2 grid-rows-3 md:grid-rows-2 gap-6 ">
			<MainWeatherWidget />
			{/* <div className="bg-secondary border border-solid border-primary-color h-full rounded-3xl p-6 ">
				Main Weather
			</div> */}
		</div>
	);
};

export default MainWeather;
