"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";
import "../styles/components/ThemeToggle.scss";

const ThemeToggle = () => {
	const { dark, setDark } = useTheme();
	const toggleTheme = () => {
		setDark(!dark);
	};
	return (
		<div className="theme-toggler">
			<div
				className="theme-buttons cursor-pointer md:hover:scale-90 transition-all"
				onClick={toggleTheme}
			>
				<div className={`light-theme-btn ${!dark && "active"}`}>
					<i className="bi bi-sun"></i>
				</div>
				<div className={`dark-theme-btn ${dark && "active"}`}>
					<i className="bi bi-moon"></i>
				</div>
			</div>
		</div>
	);
};

export default ThemeToggle;
