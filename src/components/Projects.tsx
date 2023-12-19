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
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
				Projects
			</h3>

			<div
				className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 
				scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#AD343E]/80"
			>
				{projects?.map((project) => (
					<div
						key={project._id}
						className="h-[100dvh] w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-12 md:p-44"
					>
						<motion.img
							initial={{ y: -300, opacity: 0 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 1.2 }}
							viewport={{ once: true }}
							src={urlFor(project.image).url()}
							className="max-h-96 pt-4"
							alt="project"
						/>
						<div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl">
							<div className="">
								<h4 className="text-xl md:text-4xl font-semibold text-center">
									{project.title}
								</h4>
								<div className="flex items-center justify-center space-x-5 pt-3 font-semibold">
									<p>
										<a
											href={project.linkToProd}
											title="Demo"
											className="underline"
										>
											Demo
										</a>
									</p>
									<div className="border-r border-white h-6" />

									<p>
										<a
											href={project.linkToBuild}
											title="GithubRepo"
											className="underline"
										>
											Repo
										</a>
									</p>
								</div>
							</div>

							<div className="flex items-center space-x-2 justify-center">
								{project.technologies.map((technology) => (
									<Image
										key={technology._id}
										className="h-7 w-7 md:h-10 md:w-10"
										src={urlFor(technology.image).url()}
										alt="technology"
										width={800}
										height={800}
									/>
								))}
							</div>

							<p className="text-sm md:text-lg text-center md:text-left">
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
