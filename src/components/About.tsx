"use client";

import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
	pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				About
			</h3>

			<motion.img
				initial={{ x: -200 }}
				transition={{ duration: 1.2 }}
				whileInView={{ x: 0 }}
				viewport={{ once: true }}
				src={urlFor(pageInfo?.profilePic).url()}
				className="-mb-20 md:mb-0 mt-10 md:ml-10 flex-shrink-0 w-32 h-32 rounded-full object-cover 
				md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
			/>

			<div className="space-y-4 md:space-y-10 px-0 md:px-10">
				<h4 className="text-2xl md:text-4xl font-semibold">
					A{" "}
					<span className="underline decoration-[#AD343E]/50">
						little
					</span>{" "}
					bit of me
				</h4>
				<p className="text-sm md:text-base">
					{pageInfo.backgroundInformation}
				</p>
			</div>
		</motion.div>
	);
};

export default About;
