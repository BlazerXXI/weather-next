import { DefaultWeatherData } from "@/app/constants";
import WeatherContext from "@/app/context/weather.context";
import { useContext, useEffect, useState } from "react";

function useWeatherPlace() {
	const [place, setPlace] = useState<string>(DefaultWeatherData.name);
	const { setPlace: setWeatherPlace } = useContext(WeatherContext);

	const getCurrentPlace = async (): Promise<string> => {
		return new Promise((resolve) => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					async (position) => {
						try {
							const response = await fetch(
								`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
							);
							const data = await response.json();
							resolve(data.city || DefaultWeatherData.name);
						} catch (error) {
							console.error("Error reverse geocoding: ", error);
							resolve(DefaultWeatherData.name);
						}
					},
					(error) => {
						console.error("Error getting geolocation: ", error);
						resolve(DefaultWeatherData.name);
					}
				);
			} else {
				console.error("Geolocation is not supported by this browser.");
				resolve(DefaultWeatherData.name);
			}
		});
	};

	const initializePlace = async () => {
		if (typeof window === "undefined") return;

		try {
			const cookie = await cookieStore.get("place");
			const savedPlace = cookie?.value;
			if (savedPlace) {
				setPlace(savedPlace);
				setWeatherPlace(savedPlace);
			} else {
				const city = await getCurrentPlace();
				setPlace(city);
				setWeatherPlace(city);
			}
		} catch (error) {
			console.error("Error reading cookie: ", error);
			const city = await getCurrentPlace();
			setPlace(city);
			setWeatherPlace(city);
		}
	};

	useEffect(() => {
		initializePlace();
	}, []);

	const setCurrentCity = async () => {
		try {
			const city = await getCurrentPlace();
			setPlace(city);
			setWeatherPlace(city);
		} catch (error) {
			console.error("Error getting current place: ", error);
			const city = await getCurrentPlace();
			setPlace(city);
			setWeatherPlace(city);
		}
	};

	useEffect(() => {
		if (
			place &&
			typeof window !== "undefined" &&
			place !== DefaultWeatherData.name
		) {
			cookieStore.set("place", place);
			setWeatherPlace(place);
		}
	}, [place]);

	return { place, setPlace, setCurrentCity };
}

export default useWeatherPlace;
