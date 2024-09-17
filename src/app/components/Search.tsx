"use client";
import React, { useContext, useState } from "react";
import WeatherContext from "../context/WeatherContext";

const Search = () => {
	const weatherContext = useContext(WeatherContext);
	if (!weatherContext) {
		return <div>Loading cityes...</div>;
	}
	const { data, place, setPlace } = weatherContext;

	const [inputValue, setInputValue] = useState(place);

	const handleSearch = () => {
		setPlace(inputValue);
	};

	const changePlace = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	return (
		<div className="Search">
			<form
				action=""
				onSubmit={(e) => e.preventDefault()}
				className="bg-secondary border border-solid border-primary-color rounded-3xl overflow-hidden pl-4 flex items-center "
			>
				<input
					type="text"
					onChange={(e) => changePlace(e)}
					value={inputValue}
					placeholder="Search city ..."
					className="w-full bg-transparent focus:outline-none"
				/>
				<button
					type="submit"
					className="bg-primary px-4 md:hover:opacity-80 transition-opacity md:active:scale-95"
					onClick={handleSearch}
				>
					Search
				</button>
			</form>
		</div>
	);
};

export default Search;
