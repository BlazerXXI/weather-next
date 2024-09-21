"use client";
import React, { useContext } from "react";
import WeatherContext from "../context/weather.context";

const Place = () => {
	const weatherContext = useContext(WeatherContext);
	if (!weatherContext) {
		return <div>City</div>;
	}
	const { currentWeather } = weatherContext;

	return (
		<div className="flex items-center gap-2">
			<i className="bi bi-geo-alt-fill"></i>
			<p className="text-sm">
				{currentWeather?.name ? (
					<>
						<b>{currentWeather.name}</b> {currentWeather.sys.country}
					</>
				) : (
					"City"
				)}
			</p>
		</div>
	);
};

export default Place;
