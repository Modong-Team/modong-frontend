/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
		prependData: `@import "styles/_variables.scss"; @import "styles/_mixins.scss";`,
	},
	output: 'standalone',
	async redirects() {
		return [
			{
				source: '/',
				destination: '/main',
				permanent: false,
			},
		];
	},
};

module.exports = nextConfig;
