"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Experiences } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
	experience: Experiences;
};

const Card = ({ experience }: Props) => {
	return (
		<article
			className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[18.75rem] 
		md:w-[37.5rem] xl:w-[56.25rem] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 
		cursor-pointer transition-opacity duration-200 overflow-hidden"
		>
			<motion.img
				initial={{ y: -100, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="w-24 h-24 md:w-32 md:h-32 rounded-full xl:w-[12.5rem] xl:h-[12.5rem] object-cover object-center"
				src={urlFor(experience.companyImage).url()}
				alt="company"
			/>
			<div className="px-0 md:px-10">
				<h4 className="text-xl md:text-3xl font-light">
					{experience.jobTitle}
				</h4>
				<p className="font-bold text-lg md:text-2xl mt-1">
					{experience.company}
				</p>
				<div className="flex space-x-2 my-2">
					{experience.technologies.map((tech) => (
						<Image
							key={tech._id}
							className="h-5 w-5 md:h-10 md:w-10 rounded-full"
							src={urlFor(tech.image).url()}
							alt="tech"
							width={240}
							height={240}
						/>
					))}
				</div>
				<p className="uppercase py-5 text-gray-300">
					{new Date(experience.dateStarted).toDateString()} -{" "}
					{experience.isCurrentlyWorkingHere
						? "Present"
						: new Date(experience.dateEnded).toDateString()}
				</p>
				<ul
					className="list-disc space-y-4 ml-5 text-sm max-h-44 overflow-y-scroll pr-4
					scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#AD343E]/80"
				>
					{experience.points.map((point, idx) => (
						<li key={idx}>{point}</li>
					))}
				</ul>
			</div>
		</article>
	);
};

export default Card;
