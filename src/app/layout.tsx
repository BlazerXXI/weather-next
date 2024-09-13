import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.scss";
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
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} relative container`}
			>
				<Header />
				<main className="flex min-h-[calc(100vh-3.5rem)] flex-col mt-14 pt-3 md:pt-6">
					{children}
				</main>
			</body>
		</html>
	);
}
