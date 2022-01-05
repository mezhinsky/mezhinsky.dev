import axios, { AxiosResponse } from 'axios';
import CircularJSON from 'circular-json';

export default async function handler(req, res) {
	let { id } = req.query;
	const { status, data }: AxiosResponse<any[]> = await axios.get(
		`https://api.notion.com/v1/blocks/${id}/children`,
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
