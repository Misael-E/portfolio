"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
	projects: Project[];
};

const Projects = ({ projects }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-[100dvh] relative flex overflow-hidden flex-col text-left 
		md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
		>
			<h3 className="absolute top-24 uppercase tracking-[1.25rem] text-gray-500 text-2xl">
				Projects
			</h3>

			<div
				className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 
				scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#AD343E]/80"
			>
				{projects?.map((project) => (
					<div
						key={project._id}
						className="w-[100dvw] flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-[100dvh]"
					>
						<motion.img
							initial={{ y: -300, opacity: 0 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 1.2 }}
							viewport={{ once: true }}
							src={urlFor(project.image).url()}
							className=""
							alt="project"
						/>
						<div className="space-y-10 px-0 md:px-10 max-w-6xl">
							<h4 className="text-4xl font-semibold text-center">
								{project.title}
							</h4>
							<div className="flex items-center space-x-2 justify-center">
								{project.technologies.map((technology) => (
									<Image
										key={technology._id}
										className="h-10 w-10"
										src={urlFor(technology.image).url()}
										alt="technology"
										width={800}
										height={800}
									/>
								))}
							</div>

							<p className="text-lg text-center md:text-left">
								{project.summary}
							</p>
						</div>
					</div>
				))}
			</div>

			<div className="w-full absolute top-[30%] bg-[#AD343E]/10 left-0 h-[31.25rem] -skew-y-12" />
		</motion.div>
	);
};

export default Projects;
