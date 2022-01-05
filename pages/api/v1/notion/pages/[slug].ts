import { Client, APIErrorCode } from '@notionhq/client';
import { NotionAPI } from 'notion-client';
import CircularJSON from 'circular-json';

const notion = new Client({
  auth: 'secret_SqoDIzXKIsBtLmyt85RfQ6yAN2DplUDjKlI2PK3C0sK',
})

const api = new NotionAPI({
	authToken: '5e0178008c009aa246a937f67dc898b31518822a88a02a9358de3630554703056447895467439851c67d3cfedb706ea1d268fba1f0faa3efca429fdab2badf966d9172c618e0d465c52922287e2f'
});

export default async function handler(req, res) {
	try {
		let { slug } = req.query;

		

		const myPage = await notion.databases.query({
			database_id: '91f34202864541f9955998bd776f3c60',
			filter: {
				property: 'Slug',
				text: {equals: slug}
			},
		})


		const page = await api.getPage(myPage.results[0].id);
		const json = CircularJSON.stringify(page);
		res.status(200).json(json);
	} catch (error) {
		res.status(500).json(error);
	}
}
