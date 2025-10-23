/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#000000',
				secondary: '#FFFFFF',
				accent: '#00FFFF',
				neutral: '#333333',
				highlight: '#FF0000',
			},
			fontFamily: {
				heading: ['Montserrat', 'sans-serif'],
				body: ['Roboto', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
