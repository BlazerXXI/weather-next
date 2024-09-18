import React, { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import { WeatherData } from "../types/types";
import Image from "next/image";

const MainWeatherWidget = () => {
	const weatherContext = useContext(WeatherContext);
	const data = weatherContext?.data as WeatherData;

	const {
		weather: [{ main, description, icon }],
		main: { temp, feels_like },
	} = data;
	console.log("data: ", data);

	return (
		<div className="bg-secondary border border-solid border-primary-color h-full rounded-3xl p-6 row-span-3 md:row-span-2 max-md:text-center">
			{/* <Image
				src={`https://openweathermap.org/img/wn/${icon}.png`}
				alt={description}
				width={100}
				height={100}
			/> */}
			{description}
			<p>{main}</p>
			<p className="text-3xl">{Math.round(temp)} °C</p>
			<p>fells like {Math.round(feels_like)} °C</p>
			<p>{}</p>
		</div>
	);
};

export default MainWeatherWidget;
