import { Client, APIErrorCode } from '@notionhq/client';
import { NotionAPI } from 'notion-client';
import CircularJSON from 'circular-json';

const notion = new Client({
  auth: 'secret_SqoDIzXKIsBtLmyt85RfQ6yAN2DplUDjKlI2PK3C0sK',
})

export default async function handler(req, res) {
	try {
		const pages = await notion.databases.query({
			database_id: '91f34202864541f9955998bd776f3c60',
			filter: {
				property: 'Published',
				checkbox: {equals: true}
			},
			sorts: [{
				property: 'Date',
				direction: 'descending',
			}],
		})

		const json = CircularJSON.stringify(pages);
		res.status(200).json(json);
	} catch (error) {
		res.status(500).json(error);
	}
}
