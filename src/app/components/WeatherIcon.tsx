import Image from "next/image";
import React from "react";

interface IWeatherIcon {
	iconNumber: string;
	description: string;
}

const WeatherIcon = ({ iconNumber, description }: IWeatherIcon) => {
	return (
		<Image
			className="m-auto"
			src={`/icons/weather_icons/set04/big/${iconNumber}.png`}
			// src={`https://openweathermap.org/img/wn/${iconNumber}@4x.png`}
			alt={description}
			width={100}
			height={100}
		/>
	);
};

export default WeatherIcon;
