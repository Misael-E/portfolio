"use client";

import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type Inputs = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

const Contact = (props: Props) => {
	const { register, handleSubmit } = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		window.location.href = `mailto:misael.esperanzate@hotmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
	};
	return (
		<div
			className="h-screen relative flex flex-col text-center md:text-left md:flex-row 
		max-w-7xl px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Contact
			</h3>

			<div className="flex flex-col space-y-4 md:space-y-10">
				<h4 className="text-2xl md:text-4xl font-semibold text-center">
					Ask me more.{" "}
					<span className="decoration-[#AD343E]/50 underline">
						Lets Talk.
					</span>
				</h4>

				<div className="space-y-4 md:space-y-10">
					<div className="flex items-center space-x-5 justify-center">
						<PhoneIcon className="text-[#AD343E] h-7 w-7 animate-pulse" />
						<p className="text-lg md:text-2xl">+1 403-615-2718</p>
					</div>
					<div className="flex items-center space-x-5 justify-center">
						<EnvelopeIcon className="text-[#AD343E] h-7 w-7 animate-pulse" />
						<p className="text-lg md:text-2xl">
							misael.esperanzate@hotmail.com
						</p>
					</div>
					<div className="flex items-center space-x-5 justify-center">
						<MapPinIcon className="text-[#AD343E] h-7 w-7 animate-pulse" />
						<p className="text-lg md:text-2xl">Chestermere, AB</p>
					</div>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col space-y-2 md:w-fit mx-auto"
				>
					<div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
						<input
							{...register("name")}
							placeholder="Name"
							className="contactInput"
							type="text"
						/>
						<input
							{...register("email")}
							placeholder="Email"
							className="contactInput"
							type="email"
						/>
					</div>
					<input
						{...register("subject")}
						placeholder="Subject"
						className="contactInput"
						type="text"
					/>
					<textarea
						{...register("message")}
						placeholder="Message"
						className="contactInput"
					/>
					<button
						type="submit"
						className="bg-[#AD343E] py-5 px-10 rounded-md text-black font-bold text-lg"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
