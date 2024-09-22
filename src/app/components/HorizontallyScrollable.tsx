"use client";

import React, { useRef } from "react";

const HorizontallyScrollable = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className: string;
}) => {
	const scrollRef = useRef<HTMLDivElement>(null);

	const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
		const oldX = e.touches[0].pageX;
		const scrollLeft = scrollRef.current?.scrollLeft ?? 0;

		const handleTouchMove = (e: TouchEvent) => {
			const newX = e.touches[0].pageX;
			const offset = newX - oldX;

			if (scrollRef.current) {
				scrollRef.current.scrollLeft = scrollLeft - offset;
			}
		};

		const handleTouchEnd = () => {
			window.removeEventListener("touchmove", handleTouchMove);
		};

		window.addEventListener("touchmove", handleTouchMove);
		window.addEventListener("touchend", handleTouchEnd, { once: true });
	};

	const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const oldX = e.pageX;
		const scrollLeft = scrollRef.current?.scrollLeft ?? 0;

		const handleMouseMove = (e: MouseEvent) => {
			const newX = e.pageX;
			const offset = newX - oldX;

			if (scrollRef.current) {
				scrollRef.current.scrollLeft = scrollLeft - offset;
			}
		};

		const handleMouseUp = () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};

		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mouseup", handleMouseUp, { once: true });
	};

	return (
		<div
			ref={scrollRef}
			onMouseDown={handleMouseDown}
			onTouchStart={handleTouchStart}
			className={`${className} overflow-x-auto custom-scroll cursor-grab active:cursor-grabbing pb-6`}
		>
			{children}
		</div>
	);
};

export default HorizontallyScrollable;
