import React, { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import { WeatherData } from "../types/types";

const MainWeatherWidget = () => {
	const weatherContext = useContext(WeatherContext);
	const data = weatherContext?.data as WeatherData;
	console.log(data);

	const {
		name,
		main: { temp },
	} = data;

	return (
		<div className="bg-secondary border border-solid border-primary-color h-full rounded-3xl p-6 row-span-3 md:row-span-2">
			<p>{name}</p>
			<p>{Math.round(temp)} °C</p>
		</div>
	);
};

export default MainWeatherWidget;
