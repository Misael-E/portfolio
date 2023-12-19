import { Project } from "../typings";
import { revalidatePath } from "next/cache";

export const fetchProjects = async () => {
	const res = await import(`../src/app/api/getProjects/route`);
	revalidatePath(`/#projects`);
	const data = await (await res.GET()).json();
	const projects: Project[] = data.projects;

	return projects;
};
