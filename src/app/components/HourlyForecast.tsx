import React from "react";
import { ForecastListData } from "../types/types";
import WeatherIcon from "./WeatherIcon";
import HorizontallyScrollable from "./HorizontallyScrollable";
import { hourlyDate, hourlyTime } from "../constants";

const HourlyForecast = ({
	hourlyForecast,
}: {
	hourlyForecast: ForecastListData[];
}) => {
	return (
		<div className=" flex flex-col gap-6">
			<h2 className="uppercase">Hourly Forecast</h2>
			<ul>
				<HorizontallyScrollable className="flex gap-6">
					{hourlyForecast.map((hour, index) => (
						<li
							className="flex flex-col gap-4 text-center select-none"
							key={hour.dt}
						>
							<p
								className={`min-h-6 ${
									hourlyDate(hour.dt_txt) === "Today" && "font-bold"
								}`}
							>
								{hourlyDate(hour.dt_txt) !==
									hourlyDate(hourlyForecast[index - 1]?.dt_txt) &&
									hourlyDate(hour.dt_txt)}
							</p>
							<div className="text-sm flex flex-col items-center justify-between text-center flex-1 w-40 h-60 gap-2 bg-secondary border border-solid border-primary-color rounded-3xl p-6 ">
								<p className="text-xl">{hourlyTime(hour.dt)}</p>
								<WeatherIcon
									iconNumber={hour.weather[0].icon}
									description={hour.weather[0].description}
								/>
								<p className="text-xl">{Math.round(hour.main.temp)} °C</p>
								<p className="flex items-center gap-2">
									{Math.round(hour.wind.speed * 3.6)} km/h{" "}
									<span
										style={{ transform: `rotate(${-45 + hour.wind.deg}deg)` }}
									>
										<i className={`bi bi-send-fill`}></i>
									</span>
								</p>
							</div>
						</li>
					))}
				</HorizontallyScrollable>
			</ul>
		</div>
	);
};

export default HourlyForecast;
