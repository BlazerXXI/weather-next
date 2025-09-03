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
	const currentDate = new Date().toISOString().split("T")[0];
	return Object.entries(groupedData).map(([date, entries]) => {
		let entriesToUse = entries[3] ?? entries[0];
		if (new Date(entries[0].dt_txt).toISOString().split("T")[0] === currentDate) {
			entriesToUse = entries[0];
		}
		console.log('entriesToUse: ', entriesToUse);
		const avgTemp = Math.round(entriesToUse.main.temp);
		const weather = entriesToUse.weather[0];
		const windSpeed = entriesToUse.wind.speed;
		return {
			...entriesToUse,
			dt: 0,
			dt_txt: date,
			main: {
				...entriesToUse.main,
				temp: avgTemp,
			},
			weather: [{ ...weather }],
			wind: {
				...entriesToUse.wind,
				speed: Math.round(windSpeed),
			},
		};
	});
};

