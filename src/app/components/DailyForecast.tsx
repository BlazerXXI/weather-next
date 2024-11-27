import React, { useMemo } from "react";
import { ForecastListData } from "../types/types";
import WeatherIcon from "./WeatherIcon";
import HorizontallyScrollable from "./HorizontallyScrollable";
import { dailyDate } from "../constants";

const DailyForecast = ({
	dailyForecast,
}: {
	dailyForecast: ForecastListData[];
}) => {

	return (
		<div className=" flex flex-col gap-6">
			<h2 className="uppercase">Daily Forecast</h2>
			<ul>
				<HorizontallyScrollable className="flex gap-6">
					{dailyForecast.map((day, index) => (
						<li
							className="flex flex-col gap-4 text-center select-none"
							key={day.dt_txt}
						>
							<div className="text-sm flex flex-col items-center justify-between text-center flex-1 w-40 h-60 gap-2 bg-secondary border border-solid border-primary-color rounded-3xl p-6 ">
								<p className={`text-xl ${dailyDate(day.dt_txt) === "Today" && "font-bold"}`}>
									{dailyDate(day.dt_txt) !==
										dailyDate(dailyForecast[index - 1]?.dt_txt) &&
										dailyDate(day.dt_txt)}
								</p>
								<WeatherIcon
									iconNumber={day.weather[0].icon}
									description={day.weather[0].description}
								/>
								<p className="text-xl">{Math.round(day.main.temp)} °C</p>
								<p className="flex items-center gap-2">
									{Math.round(day.wind.speed * 3.6)} km/h{" "}
									<span
										style={{ transform: `rotate(${-45 + day.wind.deg}deg)` }}
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

export default DailyForecast;
