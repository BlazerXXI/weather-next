import React, { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import { WeatherData } from "../types/types";

const CurrentWeatherInfo = () => {
	const weatherContext = useContext(WeatherContext);
	const data = weatherContext?.data as WeatherData;
	const {
		main: { humidity, pressure },
		wind: { speed: windSpeed },
		rain: { "1h": rain } = { "1h": 0 },
		visibility,
		clouds: { all: clouds },
	} = data;

	const otherInfoWidgets = [
		{
			id: 0,
			icon: "droplet",
			name: "Humidity",
			value: Math.round(humidity),
			unit: "%",
		},
		{
			id: 1,
			icon: "moisture",
			name: "Pressure",
			value: (pressure / 1013).toFixed(2),
			unit: "atm",
		},
		{
			id: 2,
			icon: "wind",
			name: "WindSpeed",
			value: Math.round(windSpeed),
			unit: "m/s",
		},
		{
			id: 3,
			icon: "cloud-rain-fill",
			name: "Rain",
			value: rain,
			unit: "mm",
		},
		{
			id: 4,
			icon: "eye",
			name: "Visibility",
			value: visibility === 10000 ? "> 10" : Math.round(visibility / 1000),
			unit: "km",
		},
		{
			id: 5,
			icon: "clouds-fill",
			name: "Clouds",
			value: Math.round(clouds),
			unit: "%",
		},
	];

	return (
		<div className="bg-secondary border border-solid border-primary-color rounded-3xl p-6 flex flex-wrap">
			{otherInfoWidgets.map(({ id, icon, name, value, unit }) => (
				<div
					className="widget w-1/3 flex flex-col justify-center items-center"
					key={id}
				>
					<div className="widget-container flex flex-col justify-center items-center gap-2">
						<div className="info flex gap-2 items-center">
							<div className="icon">
								<i className={`bi bi-${icon}`}></i>
							</div>
							<div className="value">
								{value} {unit}
							</div>
						</div>
						<div className="name">{name}</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default CurrentWeatherInfo;
