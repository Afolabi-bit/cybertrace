/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			container: {
				center: true,
				screens: {
					sm: "327px",
					md: "427px",
					lg: "1110px",
				},
			},
			backgroundImage: {
				"mobile-pattern": "url('/images/pattern-bg-mobile.png')",
				"desktop-pattern": "url('/images/pattern-bg-desktop.png')",
			},
			fontFamily: {
				rubik: ["Rubik", "sans-serif"],
			},
			boxShadow: {
				soft: "0px 50px 50px -25px rgba(0, 0, 0, 0.0983665)",
			},
		},
	},
	plugins: [],
};
