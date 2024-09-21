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
	const [dark, setDark] = useState<boolean>(false);
	const [isThemeLoaded, setIsThemeLoaded] = useState(false);

	const THEME_KEY = "darkTheme";

	const getInitialTheme = (): boolean => {
		if (typeof window === "undefined") return false;

		const savedTheme = localStorage.getItem(THEME_KEY);

		if (savedTheme !== null) {
			return savedTheme === "true";
		}

		return window.matchMedia("(prefers-color-scheme: dark)").matches;
	};

	useEffect(() => {
		const initialTheme = getInitialTheme();
		setDark(initialTheme);
		setIsThemeLoaded(true);
	}, []);

	useEffect(() => {
		if (isThemeLoaded) {
			localStorage.setItem(THEME_KEY, dark.toString());
		}
		const metaThemeColor = document.querySelector('meta[name="theme-color"]');
		if (metaThemeColor) {
			metaThemeColor.setAttribute("content", dark ? "#000000" : "#FFFFFF");
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
