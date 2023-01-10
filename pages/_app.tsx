import type { AppProps } from 'next/app'
import { ChakraProvider, ColorModeScript, useColorMode } from '@chakra-ui/react'
import theme from '../theme'
import Layout from '../components/Layout'
import Head from 'next/head'
import { prismDarkTheme, prismLightTheme } from '../theme/prism'
import { FC, ReactNode } from 'react'
import { css, Global } from '@emotion/react'

type Props = {
	children: ReactNode
}

const GlobalStyle: FC<Props> = ({ children }) => {
	const { colorMode } = useColorMode()

	return (
		<>
			<Global
				styles={css`
					${colorMode === 'light' ? prismLightTheme : prismDarkTheme}
					html {
						scroll-behavior: smooth;
					}
				`}
			/>
			{children}
		</>
	)
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<Head>
				<title>Rick Brown</title>
				<meta
					name='description'
					content='Generated by next-typescript-chakra-ui-starter'
				/>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link rel='manifest' href='/site.webmanifest' />
			</Head>

			<ChakraProvider theme={theme}>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<Layout>
					<GlobalStyle>
						<Component {...pageProps} />
					</GlobalStyle>
				</Layout>
			</ChakraProvider>
		</>
	)
}

export default MyApp
