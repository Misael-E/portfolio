import { groq } from "next-sanity";
import { sanityClient } from "../../../../sanity";
import { Skill } from "../../../../typings";

export const maxDuration = 10;
export const dynamic = "force-dynamic";
export const revalidate = 0;

const query = groq`
	*[_type == "skill"]
`;

export async function GET() {
	const skills: Skill[] = await sanityClient.fetch(query);
	return Response.json({ skills }, { status: 200 });
}
