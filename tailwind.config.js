/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'brand-blue': '#0084d6',
				'brand-dark-blue': '#0075be',
			},
		},
	},
	plugins: [],
}
