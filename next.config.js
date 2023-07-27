/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['avatars.githubusercontent.com']
	},
	experimental: {
		outputFileTracingIgnores: ['**canvas**', '**swc/core**']
	}
}

module.exports = nextConfig
