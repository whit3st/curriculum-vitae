/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				lg: '672px',
			}
		},
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				monospace: ['Monospace', 'sans-serif'],
			}
		},
	},
	darkMode: 'class',
	plugins: [],
}
