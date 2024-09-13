import { checkWeather } from "./api/api";
import MainWeather from "./components/MainWeather";

export default function Home() {
	checkWeather("Kharkiv");

	return (
		<>
			<MainWeather />
		</>
	);
}
