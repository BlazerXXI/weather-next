import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<header className="flex justify-between items-center py-4">
			<h1>
				<Link href="/">WeatherNext</Link>
			</h1>
			<nav >
				<ul className="flex gap-4">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/dashboard">Dashboard</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
