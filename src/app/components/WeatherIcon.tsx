import Image from "next/image";
import React from "react";

interface IWeatherIcon {
	icon: string;
	description: string;
}

const WeatherIcon = ({ icon, description }: IWeatherIcon) => {
	return (
		<Image
			src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
			alt={description}
			width={100}
			height={100}
		/>
	);
};

export default WeatherIcon;
