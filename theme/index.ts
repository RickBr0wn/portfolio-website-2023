import {
	theme as chakraTheme,
	extendTheme,
	StyleFunctionProps
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import '@fontsource/inter'
import '@fontsource/montserrat'

const breakpoints = {
	// define custom breakpoints
	// sm: '30em'
	// md: '48em',
	// lg: '62em',
	// xl: '80em'
}

const colors = {
	// add custom colors
	paper: {
		light: 'white',
		dark: '#132034'
	},
	hook: {
		light: '#0F172A',
		dark: '#93A3B8'
	},
	highlight: '#0EA5E9',
	gradient: {
		start: '#5A85F2',
		end: '#7ED3FD'
	}
}

const config = {
	// adjust the config of the light/dark mode
	initialColorMode: 'dark',
	useSystemColorMode: true
}

const fonts = {
	// add custom fonts
	body: `"Inter", sans-serif`
	// heading: `"Montserrat", sans-serif`
}

const fontSizes = {
	xs: '12px',
	sm: '14px',
	md: '16px',
	lg: '18px',
	xl: '20px',
	'2xl': '24px',
	'3xl': '28px',
	'4xl': '36px',
	'5xl': '48px',
	'6xl': '64px'
}

const styles = {
	// add global styles
	global: (props: StyleFunctionProps) => ({
		body: {
			// example of changing both the background &
			// foreground color based on the color mode
			bg: mode('#F6F6F6', '#070E16')(props),
			color: mode('#0F172A', '#EDF2F7')(props)
		}
	})
}

const overrides = {
	...chakraTheme,
	breakpoints,
	colors,
	config,
	fonts,
	fontSizes,
	styles
}

const theme = extendTheme(overrides)

export default theme
