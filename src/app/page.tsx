import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
	return (
		<div
			className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
		overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 
		scrollbar-thumb-[#AD343E]/80"
		>
			<Header />

			<section id="hero" className="snap-start">
				<Hero />
			</section>

			{/* About */}
			<section id="about" className="snap-center">
				<About />
			</section>
			{/* Experiences */}

			<section id="experience" className="snap-center">
				<Experience />
			</section>

			{/* Skills */}

			<section id="skills" className="snap-start">
				<Skills />
			</section>

			{/* Projects */}
			<section id="projects" className="snap-start">
				<Projects />
			</section>
			{/* Contact Me */}

			<section id="contact" className="snap-start">
				<Contact />
			</section>

			<Link href="#hero">
				<footer className="sticky bottom-5 w-full cursor-pointer">
					<div className="flex items-center justify-center">
						<Image
							className="h-16 w-16 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
							src="/logo.svg"
							alt="home"
							width={800}
							height={800}
						/>
					</div>
				</footer>
			</Link>
		</div>
	);
};

export default Home;
