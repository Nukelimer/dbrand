/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				helvetica: ['"Helvetica"', 'Arial', 'sans-serif']
			}
		}
	},

	plugins: [
		require('tailwind-scrollbar'),
		
		
	]
};
