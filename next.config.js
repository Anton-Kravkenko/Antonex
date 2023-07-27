/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['avatars.githubusercontent.com']
	},
	experimental: {
		outputFileTracingIgnores: ['**canvas**', '**swc/core**'],
		outputFileTracingExcludes: {
			'*': [
				'node_modules/@swc/core-linux-x64-gnu',
				'node_modules/@swc/core-linux-x64-musl',
				'node_modules/@esbuild/linux-x64'
			]
		}
	}
}

module.exports = nextConfig
