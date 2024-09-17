"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
	dark: boolean;
	setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const THEME_KEY = "darkTheme";

const getInitialTheme = (): boolean => {
	if (typeof window === "undefined") return false;
	const savedTheme = localStorage.getItem(THEME_KEY);
	return savedTheme === "true"
		? true
		: window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [dark, setDark] = useState<boolean>(false);

	useEffect(() => {
		setDark(getInitialTheme());
	}, []);

	useEffect(() => {
		localStorage.setItem(THEME_KEY, dark.toString());
	}, [dark]);

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
