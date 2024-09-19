import React, { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import { WeatherData } from "../types/types";
import WeatherIcon from "./WeatherIcon";

const CurrentWeatherWidget = () => {
	const weatherContext = useContext(WeatherContext);
	const data = weatherContext?.data as WeatherData;

	const {
		weather: [{ main, description, icon: iconNumber }],
		main: { temp, feels_like },
	} = data;

	return (
		<div className="bg-secondary border border-solid border-primary-color rounded-3xl p-6 max-md:text-center items-center justify-center md:items-start flex flex-col">
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
