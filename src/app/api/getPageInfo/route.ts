import { groq } from "next-sanity";
import { sanityClient } from "../../../../sanity";
import { PageInfo } from "../../../../typings";

export const maxDuration = 10;
export const dynamic = "force-dynamic";
export const revalidate = 0;

const query = groq`
	*[_type == "pageInfo"][0]
`;

export async function GET() {
	const pageInfo: PageInfo = await sanityClient.fetch(query);

	return Response.json({ pageInfo }, { status: 200 });
}
