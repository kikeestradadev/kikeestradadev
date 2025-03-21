// tailwind.config.js
module.exports = {
	mode: 'jit', // Activa el modo JIT
	content: [
		'**/*.html',
		'**/*.php',
		'**/*.js',
		'!wp-admin',
		'!wp-includes',
		'!node_modules',
		'!Prepros Export',
		"./src/**/*.{html,js,pug}",
		"./public/**/*.html"
	],
	plugins: [require('@tailwindcss/typography')],
	theme: {
		screens: {
			's': '320px',
			'sm': '480px',
			'm': '640px',
			'l': '960px',
			'lg': '1280px',
			'xl': '1600px',
			'xxl': '1920px'
		}
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
};
