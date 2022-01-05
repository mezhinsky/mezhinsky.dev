import axios, { AxiosResponse } from 'axios';
import CircularJSON from 'circular-json';

export default async function handler(req, res) {
	let { slug } = req.query;

	const body = JSON.stringify({
		// filter: {
		// 	or: [
		// 		{
		// 			property: 'Slug',
		// 			title: {
		// 				equals: slug,
		// 			},
		// 		},
		// 	],
		// },
	});

	const { status, data }: AxiosResponse<any[]> = await axios.post(
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



	const json = CircularJSON.stringify(data);

	res.status(status).json(json);
}
