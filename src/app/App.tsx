"use client";

import React from "react";
import { useTheme } from "./context/ThemeContext";
import localFont from "next/font/local";
import Header from "./components/Header";
import { useLoading } from "./context/WeatherContext";
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
	const { isLoading } = useLoading();

	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} App-${
					dark ? "dark" : "light"
				} relative container`}
			>
				{isLoading && <Loader />}
				<Header />
				<main className="flex flex-col gap-6 pt-6 md:pt-6 relative">
					{children}
				</main>
			</body>
		</html>
	);
}

export default App;
