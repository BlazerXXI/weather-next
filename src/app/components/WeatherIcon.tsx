import Image from "next/image";
import React from "react";

interface IWeatherIcon {
	iconNumber: string;
	description: string;
}

const WeatherIcon = ({ iconNumber, description }: IWeatherIcon) => {
	return (
		<Image
			className="max-md:mx-auto pointer-events-none"
			src={`/icons/weather_icons/set02/big/${iconNumber}.png`}
			alt={description}
			width={50}
			height={50}
			loading="lazy"
		/>
	);
};

export default WeatherIcon;
