import { Social } from "../typings";

export const fetchSocials = async () => {
	const res = await import("../src/app/api/getSocials/route");
	const data = await (await res.GET()).json();
	const socials: Social[] = data.socials;

	return socials;
};
