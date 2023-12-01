import { Skill } from "../typings";

export const fetchSkills = async () => {
	const res = await import(`../src/app/api/getSkills/route`);
	const data = await (await res.GET()).json();
	const skills: Skill[] = data.skills;

	return skills;
};
