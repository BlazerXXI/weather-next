"use client";

import React from "react";
import { useTheme } from "./context/theme.context";
import localFont from "next/font/local";
import Header from "./components/Header";
import { useWeather } from "./context/weather.context";
import Loader from "./components/Loader";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});

const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

function App({ children }: { children: React.ReactNode }) {
	const { dark } = useTheme();
	const { loading } = useWeather();

	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} App-${
					dark ? "dark" : "light"
				} relative container ${loading ? "overflow-hidden" : ""}`}
			>
				{loading && <Loader />}
				<>
					<Header />
					<main className="flex flex-col gap-8 pt-6 md:pt-6 relative">
						{children}
					</main>
				</>
			</body>
		</html>
	);
}

export default App;
