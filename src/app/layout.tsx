import React from "react";
import type { Metadata, Viewport } from "next";
import "./globals.scss";
import { WeatherProvider } from "./context/weather.context";
import { ThemeProvider } from "./context/theme.context";
import App from "./App";

export const metadata: Metadata = {
	manifest: "/manifest.json",
	title: "WeatherNext",
	description: "WeatherNext",
};

export const viewport: Viewport = {
	themeColor: "#FFFFFF",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ThemeProvider>
			<WeatherProvider>
				<App>{children}</App>
			</WeatherProvider>
		</ThemeProvider>
	);
}
