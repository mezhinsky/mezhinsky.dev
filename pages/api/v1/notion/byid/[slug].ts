import { NotionAPI } from 'notion-client';
import CircularJSON from 'circular-json';


const api = new NotionAPI({
	authToken: '5e0178008c009aa246a937f67dc898b31518822a88a02a9358de3630554703056447895467439851c67d3cfedb706ea1d268fba1f0faa3efca429fdab2badf966d9172c618e0d465c52922287e2f'
});

export default async function handler(req, res) {
	let { slug } = req.query;

	try {
		const page = await api.getPage(slug);

		const json = CircularJSON.stringify(page);
		res.status(200).json(json);

	} catch (error) {
		res.status(500).json(error);
	}
}
