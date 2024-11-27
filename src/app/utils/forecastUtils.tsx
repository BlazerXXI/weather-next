import { ForecastListData } from "../types/types";

export const groupForecastByDay = (
	forecastList: ForecastListData[]
): Record<string, ForecastListData[]> => {
	return forecastList.reduce((acc, item) => {
		const date = new Date(item.dt_txt).toISOString().split("T")[0];
		if (!acc[date]) {
			acc[date] = [];
		}
		acc[date].push(item);
		return acc;
	}, {} as Record<string, ForecastListData[]>);
};

export const calculateDailySummary = (
	groupedData: Record<string, ForecastListData[]>
) => {
	return Object.entries(groupedData).map(([date, entries]) => {
		const avgTemp =
			entries.reduce((sum, entry) => sum + entry.main.temp, 0) / entries.length;
		const weather = entries[0].weather[0];
		const windSpeed =
			entries.reduce((sum, entry) => sum + entry.wind.speed, 0) /
			entries.length;
		return {
			...entries[0],
			dt: 0,
			dt_txt: date,
			main: {
				...entries[0].main,
				temp: Math.round(avgTemp),
			},
			weather: [{ ...weather }],
			wind: {
				...entries[0].wind,
				speed: Math.round(windSpeed * 3.6),
			},
		};
	});
};

