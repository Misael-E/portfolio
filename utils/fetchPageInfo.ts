import { PageInfo } from "../typings";

export const fetchPageInfo = async () => {
	const res = await import(`../src/app/api/getPageInfo/route`);
	const data = await (await res.GET()).json();
	const pageInfo: PageInfo = data.pageInfo;

	return pageInfo;
};
