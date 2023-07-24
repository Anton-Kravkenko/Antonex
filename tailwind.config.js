/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		colors: {
			silver: '#E5E5E5',
			charcoal: '#888888',
			dark: '#000',
			primary: '#32B47D',
			midnight: '#101010',
			twilight: '#1B2021',
			dusk: '#292F36',
			white: '#fff',
			crimson: '#DC3F41',
			sunshine: '#FFBE0B'
		}
	},
	plugins: []
}
