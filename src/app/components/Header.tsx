import React from "react";
import Place from "./Place";
import Search from "./Search";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
	return (
		<header className="fixed w-full z-10 top-0 left-1/2 -translate-x-1/2 before:opacity-80 before:absolute before:z-[-2] before:inset-0 before:content-[''] after:backdrop-blur-lg after:absolute after:z-[-1] after:inset-0 after:content-[''] border-b border-solid border-primary-color">
			<div className="container flex justify-between items-center gap-4">
				<Place />
				<Search />
				<ThemeToggle />
			</div>
		</header>
	);
};

export default Header;
