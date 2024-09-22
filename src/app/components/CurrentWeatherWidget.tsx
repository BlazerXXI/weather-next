import React from "react";
import WeatherIcon from "./WeatherIcon";
import { WeatherData } from "../types/types";

const CurrentWeatherWidget = ({
	currentWeather,
}: {
	currentWeather: WeatherData;
}) => {
	const {
		weather: [{ main, description, icon: iconNumber }],
		main: { temp, feels_like },
	} = currentWeather;

	return (
		<div className="bg-secondary md:flex-[0_1_33%] border border-solid border-primary-color rounded-3xl p-6 max-md:text-center items-center justify-center md:items-start flex flex-col gap-4">
			<div className="w-1/3 max-md:mx-auto">
				<WeatherIcon iconNumber={iconNumber} description={description} />
			</div>
			<p className="text-3xl">{Math.round(temp)} °C</p>
			<p>fells like {Math.round(feels_like)} °C</p>
			<p className="mt-4">
				{main} <span className="text-sm">({description})</span>
			</p>
		</div>
	);
};

export default CurrentWeatherWidget;
