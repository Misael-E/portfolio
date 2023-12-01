import { groq } from "next-sanity";
import { sanityClient } from "../../../../sanity";
import { Project } from "../../../../typings";

const query = groq`
	*[_type == "project"] {
		...,
		technologies[]->
	}
`;

export async function GET() {
	const projects: Project[] = await sanityClient.fetch(query);

	return Response.json({ projects }, { status: 200 });
}
