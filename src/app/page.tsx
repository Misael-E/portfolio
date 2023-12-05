import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";
import Link from "next/link";
import { Experiences, PageInfo, Project, Skill, Social } from "../../typings";
import { fetchPageInfo } from "../../utils/fetchPageInfo";
import { fetchExperiences } from "../../utils/fetchExperiences";
import { fetchSkills } from "../../utils/fetchSkills";
import { fetchProjects } from "../../utils/fetchProjects";
import { fetchSocials } from "../../utils/fetchSocials";

type Props = {};

const fetchAllData = async () => {
	const pageInfo: PageInfo = await fetchPageInfo();
	const experiences: Experiences[] = await fetchExperiences();
	const skills: Skill[] = await fetchSkills();
	const projects: Project[] = await fetchProjects();
	const socials: Social[] = await fetchSocials();

	return {
		pageInfo,
		experiences,
		skills,
		projects,
		socials,
	};
};

const Home = async (props: Props) => {
	const { pageInfo, experiences, skills, projects, socials } =
		await fetchAllData();
	return (
		<div
			className="bg-[rgb(36,36,36)] text-white h-full snap-y snap-mandatory 
		overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 
		scrollbar-thumb-[#AD343E]/80"
		>
			<Header socials={socials} />

			<section id="hero" className="snap-start">
				<Hero pageInfo={pageInfo} />
			</section>

			{/* About */}
			<section id="about" className="snap-center">
				<About pageInfo={pageInfo} />
			</section>
			{/* Experiences */}

			<section id="experience" className="snap-center">
				<Experience experiences={experiences} />
			</section>

			{/* Skills */}

			<section id="skills" className="snap-start">
				<Skills skills={skills} />
			</section>

			{/* Projects */}
			<section id="projects" className="snap-start">
				<Projects projects={projects} />
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
