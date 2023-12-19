import { Skill } from "../typings";
import { revalidatePath } from "next/cache";

export const fetchSkills = async () => {
	const res = await import(`../src/app/api/getSkills/route`);
	revalidatePath(`/#skills`);
	const data = await (await res.GET()).json();
	const skills: Skill[] = data.skills;

	return skills;
};
