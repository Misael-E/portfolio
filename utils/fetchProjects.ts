import { Project } from "../typings";

export const fetchProjects = async () => {
	const res = await import(`../src/app/api/getProjects/route`);
	const data = await (await res.GET()).json();
	const projects: Project[] = data.projects;

	return projects;
};
