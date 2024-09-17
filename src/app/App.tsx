"use client";

import React from "react";
import { useTheme } from "./context/ThemeContext";
import localFont from "next/font/local";
import Header from "./components/Header";

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

	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} App-${
					dark ? "dark" : "light"
				} relative container`}
			>
				<Header />
				<main className="flex min-h-[calc(100vh-3.5rem)] flex-col mt-14 pt-3 md:pt-6">
					{children}
				</main>
			</body>
		</html>
	);
}

export default App;
