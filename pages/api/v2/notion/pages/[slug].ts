import axios, { AxiosResponse } from 'axios';
import CircularJSON from 'circular-json';

export default async function handler(req, res) {
	let { slug } = req.query;

	const body = JSON.stringify({
		filter: {
			or: [
				{
					property: 'Slug',
					title: {
						equals: slug,
					},
				},
			],
		},
	});

	try {
		const baseResponse: AxiosResponse<any> = await axios.post(
			`https://api.notion.com/v1/databases/${
				process.env.NOTION_DATABASE_ID ? process.env.NOTION_DATABASE_ID : ''
			}/query`,
			body,
			{
				headers: {
					Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
					'Notion-Version': '2021-05-13',
					'Content-Type': 'application/json',
				},
			},
		);

		const blockResponse: AxiosResponse<any> = await axios.get(
			`https://api.notion.com/v1/blocks/${baseResponse.data.results[0].id}/children`,
			{
				headers: {
					Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
					'Notion-Version': '2021-05-13',
					'Content-Type': 'application/json',
				},
			},
		);

		baseResponse.data.results[0].blocks = blockResponse.data.results;

		const json = CircularJSON.stringify(baseResponse.data.results[0]);

		res.status(baseResponse.status).json(json);

	} catch (error) {
		res.status(500).json(error);
	}

}
