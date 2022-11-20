/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				button: "#11a683",
				buttover: "#15c39a",
				title: "rgb(74, 110, 224)",
				disabled: "rgb(198, 203,222)",
			},
		},
	},
	plugins: [],
};
