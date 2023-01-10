import { Box, Flex, Heading, Stack, Text, useColorMode } from '@chakra-ui/react'
import type { NextPage } from 'next'
import ImageLoader from '../components/ImageLoader'

const Home: NextPage = () => {
	const { colorMode } = useColorMode()

	return (
		<main role='main'>
			<Flex
				w={'100%'}
				mt={{ base: 4, lg: 36 }}
				flexDirection={{ base: 'column-reverse', md: 'row' }}
			>
				<Stack justifyContent={'center'}>
					<Heading
						fontSize={{ base: '36px', md: '54px', lg: '68px' }}
						mt={{ base: 4, md: 0 }}
						mb={{ base: -4, md: -6 }}
						fontWeight={'extrabold'}
					>
						Hello, I&apos;m
					</Heading>
					<Heading
						bgGradient='linear(to-l, gradient.start, gradient.end)'
						bgClip='text'
						fontSize={{ base: '56px', md: '74px', lg: '88px' }}
						fontWeight={'extrabold'}
						ml={4}
					>
						Rick Brown
					</Heading>

					<Text
						fontSize={'20px'}
						color={colorMode === 'dark' ? 'lightgray' : 'gray.700'}
					>
						I am a web developer, living in the South East of England. I love
						cooking and gaming, but never at the same time!
					</Text>
				</Stack>

				<Box
					height={{ base: 200, md: 300 }}
					width={{ base: 200, md: 300 }}
					margin={'auto'}
				>
					<ImageLoader
						imgUrl={'https://d2d4rtarj3og8s.cloudfront.net/avatar'}
						alt={'a memoji'}
						width={200}
						height={200}
					/>
				</Box>
			</Flex>
		</main>
	)
}

export default Home
