"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
	company: {
		src: string;
		name: string;
		position: string;
		started: string;
		ended: string;
		techSrc: string[];
		points: string[];
	};
};

const Card = (props: Props) => {
	const { company } = props;
	return (
		<article
			className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] 
		md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 
		cursor-pointer transition-opacity duration-200 overflow-hidden"
		>
			<motion.img
				initial={{ y: -100, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
				src={company.src}
				alt="company"
			/>
			<div className="px-0 md:px-10">
				<h4 className="text-3xl font-light">{company.position}</h4>
				<p className="font-bold text-2xl mt-1">{company.name}</p>
				<div className="flex space-x-2 my-2">
					{company.techSrc.map((src) => (
						<Image
							key={src}
							className="h-10 w-10 rounded-full"
							src={src}
							alt="tech"
							width={240}
							height={240}
						/>
					))}
				</div>
				<p className="uppercase py-5 text-gray-300">
					{company.started} - {company.ended}
				</p>
				<ul className="list-disc space-y-4 ml-5 text-sm max-h-52 overflow-y-scroll">
					{company.points.map((point) => (
						<li key={point}>{point}</li>
					))}
				</ul>
			</div>
		</article>
	);
};

export default Card;
