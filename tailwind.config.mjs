/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#FBA824', // Orange
				secondary: '#00002E', // Dark Blue
				accent: '#5CC796', // Teal
				dark: '#0f0f1e', // Primary Background
				'dark-secondary': '#1a1a2e', // Secondary Background
				'text-main': '#f5f5f5', // Off-white
				'text-muted': '#b0b0b0', // Grey
				border: '#2a2a3e', // Borders
				success: '#0A7C50', // Dark Green
				highlight: '#FF7D7D', // Pink
				'highlight-soft': '#C7C652', // Light Green
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Space Grotesk', 'sans-serif'],
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '1.5rem',
					lg: '2rem',
				},
				screens: {
					'2xl': '1200px',
				},
			},
		},
	},
	plugins: [],
}
