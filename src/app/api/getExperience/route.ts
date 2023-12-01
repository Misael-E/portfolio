import { groq } from "next-sanity";
import { sanityClient } from "../../../../sanity";
import { Experiences } from "../../../../typings";

const query = groq`
	*[_type == "experience"] {
		...,
		technologies[]->
	}
`;

export async function GET() {
	const experiences: Experiences[] = await sanityClient.fetch(query);

	return Response.json({ experiences }, { status: 200 });
}
