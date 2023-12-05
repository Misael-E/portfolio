"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				scale: [1, 2, 2, 3, 1],
				opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
				borderRadius: ["20%", "20%", "50%", "80%", "20%"],
			}}
			transition={{ duration: 2.5 }}
			className="relative flex justify-center items-center"
		>
			<div className="absolute border border-[#333333] rounded-full h-[12.5rem] w-[12.5rem] mt-52 animate-ping" />
			<div className="absolute border border-[#333333] rounded-full h-[18.75rem] w-[18.75rem] mt-52 animate-ping" />
			<div className="absolute border border-[#333333] rounded-full h-[31.25rem] w-[31.25rem] mt-52 animate-ping" />
			<div className="rounded-full border border-[#AD343E] opacity-20 h-[40.625rem] w-[40.625rem] absolute mt-52 animate-pulse" />
			<div className="absolute border border-[#333333] rounded-full h-[50rem] w-[50rem] mt-52 animate-ping" />
		</motion.div>
	);
};

export default BackgroundCircles;
