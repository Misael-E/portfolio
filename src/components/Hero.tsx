"use client";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
	pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
	const [text, count] = useTypewriter({
		words: [
			`Hi, I'm ${pageInfo?.name}`,
			"Struggles-with-fizzbuzz.tsx",
			"<ButKnowsDfs />",
		],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<div className="h-[100dvh] flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
			<BackgroundCircles />
			<Image
				className="relative rounded-full h-32 w-32 mx-auto object-cover"
				src={urlFor(pageInfo.heroImage).url()}
				alt="profile"
				width={800}
				height={800}
			/>
			<div className="z-20">
				<h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
					{pageInfo.role}
				</h2>
				<h1 className="text-4xl md:text-5xl lg:6xl font-semibold px-10">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="#AD343E" />
				</h1>
				<div className="pt-5">
					<Link href="#about">
						<button className="heroButton">About</button>
					</Link>
					<Link href="#experience">
						<button className="heroButton">Experience</button>
					</Link>
					<Link href="#skills">
						<button className="heroButton">Skills</button>
					</Link>
					<Link href="#projects">
						<button className="heroButton">Projects</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
