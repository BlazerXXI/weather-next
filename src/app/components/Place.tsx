"use client";
import React, { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const Place = () => {
	const weatherContext = useContext(WeatherContext);
	if (!weatherContext) {
		return <div>City</div>;
	}
	const { data } = weatherContext;

	return (
		<div className="flex items-center gap-2">
			<i className="bi bi-geo-alt-fill"></i>
			<p className="text-sm">
				{data?.name ? (
					<>
						<b>{data.name}</b> {data.sys.country}
					</>
				) : (
					"City"
				)}
			</p>
		</div>
	);
};

export default Place;
