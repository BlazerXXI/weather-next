"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
	dark: boolean;
	setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [dark, setDark] = useState<boolean>(
		typeof window !== "undefined" &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
	);
	const [isThemeLoaded, setIsThemeLoaded] = useState(false);

	const THEME_KEY = "darkTheme";

	useEffect(() => {
		const loadTheme = async () => {
			if (typeof window === "undefined") return;

			try {
				const cookie = await cookieStore.get(THEME_KEY);
				const savedTheme = cookie?.value;

				if (savedTheme !== undefined) {
					setDark(savedTheme === "true");
				} else {
					setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
				}
			} catch (error) {
				console.error("Error reading cookie: ", error);
				setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
			} finally {
				setIsThemeLoaded(true);
			}
		};

		loadTheme();
	}, []);

	useEffect(() => {
		if (isThemeLoaded) {
			cookieStore.set(THEME_KEY, dark.toString());
			const metaThemeColor = document.querySelector('meta[name="theme-color"]');
			if (metaThemeColor) {
				metaThemeColor.setAttribute("content", dark ? "#000000" : "#FFFFFF");
			}
		}
	}, [dark, isThemeLoaded]);

	return (
		<ThemeContext.Provider value={{ dark, setDark }}>
			{children}
		</ThemeContext.Provider>
	);
};

function useTheme() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
}

export { ThemeProvider, useTheme };
export default ThemeContext;
