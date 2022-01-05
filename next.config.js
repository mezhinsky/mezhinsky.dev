const withPlugins = require('next-compose-plugins');

const nextConfig = {
	images: {
		domains: [],
	},
	rewrites: async () => {
		return [
			{
				source: '/api/v1/notion/page/:slug([A-Za-z0-9-]{1,31}$)',
				destination: '/api/v1/notion/pages/:slug',
			},
			{
				source: '/api/v1/notion/page/:slug([A-Za-z0-9]{32}$)',
				destination: '/api/v1/notion/byid/:slug',
			},
		];
	},
	redirects: async () => {
		return [
			{
				source: '/about-me',
				destination: '/about',
				permanent: true,
			},
		];
	},
};

module.exports = withPlugins([], nextConfig);
