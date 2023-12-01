import { Experiences } from "../typings";

export const fetchExperiences = async () => {
	const res = await import(`../src/app/api/getExperience/route`);
	const data = await (await res.GET()).json();
	const experiences: Experiences[] = data.experiences;

	return experiences;
};
