import React from "react";

const MainWeather = () => {
	return (
		<div className=" w-full h-full min-h-[80vh] rounded-3xl grid grid-cols-1 md:grid-cols-2 grid-rows-3 md:grid-rows-2 gap-6 ">
			<div className="bg-secondary border border-solid border-primary-color h-full rounded-3xl p-6 row-span-3 md:row-span-2">Main Weather</div>
			<div className="bg-secondary border border-solid border-primary-color h-full rounded-3xl p-6 ">Main Weather</div>
			<div className="bg-secondary border border-solid border-primary-color h-full rounded-3xl p-6 ">Main Weather</div>
		</div>
	);
};

export default MainWeather;
