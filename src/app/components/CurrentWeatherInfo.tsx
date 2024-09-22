import React from "react";
import { WeatherData } from "../types/types";
import { otherInfoWidgets } from "../constants";

const CurrentWeatherInfo = ({
	currentWeatherInfo,
}: {
	currentWeatherInfo: WeatherData;
}) => {
	const {
		main: { humidity, pressure },
		wind: { speed: windSpeed },
		rain: { "1h": rain } = { "1h": 0 },
		visibility,
		clouds: { all: clouds },
	} = currentWeatherInfo;

	return (
		<div className="bg-secondary border border-solid border-primary-color rounded-3xl p-6 flex md:flex-1 max-md:gap-y-4 flex-wrap">
			{otherInfoWidgets(
				humidity,
				pressure,
				windSpeed,
				rain as number,
				visibility,
				clouds
			).map(({ id, icon, name, value, unit }) => (
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
