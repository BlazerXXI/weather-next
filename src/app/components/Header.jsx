import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<header className="fixed w-full z-10 top-0 left-1/2 -translate-x-1/2 before:bg-neutral-950 before:opacity-80 before:absolute before:z-[-2] before:inset-0 before:content-[''] after:backdrop-blur-lg after:absolute after:z-[-1] after:inset-0 after:content-['']">
			<div className="container flex justify-between items-center h-14 py-4">
				<h1>
					<Link href="/">WeatherNext</Link>
				</h1>
				<nav>
					<ul className="flex gap-4">
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/dashboard">Dashboard</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
