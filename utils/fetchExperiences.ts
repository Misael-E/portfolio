import { Experiences } from "../typings";
import { revalidatePath } from "next/cache";

export const fetchExperiences = async () => {
	const res = await import(`../src/app/api/getExperience/route`);
	revalidatePath(`/#experience`);
	const data = await (await res.GET()).json();
	const experiences: Experiences[] = data.experiences;

	return experiences;
};
