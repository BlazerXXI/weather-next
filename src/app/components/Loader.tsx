import React from "react";
import "../styles/components/Loader.scss";

const Loader = () => {
	return (
		<div className="loader fixed top-0 inset-0 z-10 bg-primary w-full h-full flex justify-center items-center">
			<div className="dots-loader">
				<div className="dot"></div>
				<div className="dot"></div>
				<div className="dot"></div>
			</div>
		</div>
	);
};

export default Loader;
