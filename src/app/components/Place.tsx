"use client";
import React, { useContext } from "react";
import WeatherContext from "../context/weather.context";
import useWeatherPlace from "../utils/hooks/useWeatherPlace";

const Place = () => {
	const weatherContext = useContext(WeatherContext);
	if (!weatherContext) {
		return <div>City</div>;
	}
	const { currentWeather } = weatherContext;
	const { setCurrentCity } = useWeatherPlace();

	return (
		<div className="flex items-center gap-2">
			<button
				type="button"
				onClick={() => setCurrentCity()}
				className="hover:scale-110 active:scale-90 transition-transform"
				title="Change city to home"
			>
				<i className="bi bi-house-fill"></i>
			</button>
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
