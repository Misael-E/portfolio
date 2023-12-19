import { groq } from "next-sanity";
import { sanityClient } from "../../../../sanity";
import { Experiences } from "../../../../typings";

export const maxDuration = 10;
export const dynamic = "force-dynamic";
export const revalidate = 0;

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
