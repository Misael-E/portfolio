import { groq } from "next-sanity";
import { sanityClient } from "../../../../sanity";
import { Social } from "../../../../typings";

export const maxDuration = 10;
export const dynamic = "force-dynamic";
export const revalidate = 0;

const query = groq`
	*[_type == "social"]
`;

export async function GET() {
	const socials: Social[] = await sanityClient.fetch(query);
	return Response.json({ socials }, { status: 200 });
}
