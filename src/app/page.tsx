import { checkWeather } from "./api/api";

export default function Home() {
	checkWeather();

	return (
		<main className="flex min-h-screen flex-col items-center justify-center">
			<h2>WeatherNext is coming soon</h2>
		</main>
	);
}
