import { Box, Flex, Heading, Stack, Text, useColorMode } from '@chakra-ui/react'
import type { NextPage } from 'next'
import ImageLoader from '../components/ImageLoader'

const Home: NextPage = () => {
	const { colorMode } = useColorMode()

	return (
		<main role='main'>
			<Flex w={'100%'} justify={'space-evenly'} mt={36}>
				<Stack justifyContent={'center'}>
					<Heading fontSize={'68px'} mb={-6} fontWeight={'extrabold'}>
						Hello, I&apos;m
					</Heading>
					<Heading
						bgGradient='linear(to-l, gradient.start, gradient.end)'
						bgClip='text'
						fontSize={'88px'}
						fontWeight={'extrabold'}
						ml={4}
					>
						Rick Brown
					</Heading>

					<Text fontSize={'xl'} fontWeight={'bold'}>
						💻 I am a web developer, living in the 🇬🇧 South East of England.
					</Text>
					<Text fontSize={'xl'} fontWeight={'bold'}>
						I love 👨🏼‍🍳 cooking and 🎮 gaming, but never at the same time!
					</Text>
				</Stack>

				<Box height={300} width={300}>
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
