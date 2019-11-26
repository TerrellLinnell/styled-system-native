const colors = {
	text: '#000',
	background: '#fff',
	primary: '#00f',
	secondary: '#00a',
	highlight: '#ededff',
	accent: '#c0f',
	gray: '#eee',
	lightgray: '#fafafa',
	midgray: '#777',
	modes: {
		dark: {
			text: '#fff',
			background: '#000',
			primary: '#0cf',
			secondary: '#f0e',
			gray: '#222',
			lightgray: '#111',
			highlight: '#001119',
		},
		cyan: {
			text: '#023',
			background: '#0ff',
			primary: '#03c',
			secondary: '#01a',
			gray: '#0cc',
			lightgray: '#0ee',
			highlight: '#0de',
		},
		gray: {
			text: '#eef',
			background: '#333336',
			primary: '#09f',
			secondary: '#0bf',
			gray: '#55555a',
			lightgray: '#444448',
			highlight: '#33444c',
		},
		book: {
			text: '#322',
			background: '#fff9f9',
			primary: '#c30',
			secondary: '#400',
			gray: '#e9e6e6',
			lightgray: '#f9f6f6',
		},
		magenta: {
			text: '#203',
			background: '#f3f',
			primary: '#208',
			secondary: '#106',
			gray: '#c0c',
			lightgray: '#e0e',
		},
	},
};

export default {
	initialColorMode: 'dark',
	colors,
	fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
};
