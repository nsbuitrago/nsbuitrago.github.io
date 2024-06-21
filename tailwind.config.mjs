/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			sans: ['PPObjectSans-Regular', 'Helvetica', 'sans-serif', 'system-ui'],
			mono: ['JetBrainsMono[wght]', 'monospace', 'system-ui'],
			display: ['MajorMonoDisplayNSBRegular', 'Helvetica', 'sans-serif', 'system-ui']
		},
		colors: {
			'light': '#F0F1EF',
			'dark': '#1A2023',
			'fg-dark': '#34424C',
			'fg-light': '#F0F1EF',
			'primary': '#689689',
			'fg-01': '#CDD8DF',
			'fg-02': '#96A5AE',
			'fg-03': '#5B6B75',
			'fg-04': '#D4CAC0',
			'fg-05': '#B2ADA4',
			'fg-06': '#928F8A',
		}
	},
	plugins: [],
}
