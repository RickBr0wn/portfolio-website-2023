import { Container, Heading, Stack, Text, useColorMode } from '@chakra-ui/react'
import { FC } from 'react'


type Props = {}

const About: FC<Props> = (): JSX.Element => {
	const { colorMode } = useColorMode()

	return (
		<Container as={'section'} maxW={'container.md'} h={'100%'}>
			<Stack mt={12}>
				<Heading fontSize={'6xl'} mb={2}>
					About Me
				</Heading>

				<Text
					fontSize={'20px'}
					color={colorMode === 'dark' ? 'lightgray' : 'gray.700'}
				>
					My name is Rick Brown and I am a self-taught web developer. I have
					always been passionate about technology and programming, and decided
					to teach myself how to code.
				</Text>
				<Text
					fontSize={'20px'}
					color={colorMode === 'dark' ? 'lightgray' : 'gray.700'}
				>
					After many hours of hard work and dedication, I am now comfortable in
					Javascript/Typescript, React, Next.js, Node.js, Express, MongoDB,
					PostgreSQL, HTML, CSS, and a wide variety of packages associated with
					the React/Javascript eco-system. I also enjoy using Unity (C#), and of
					course Leetcode. All together this makes me feel ready to take on my
					first job in the tech industry.
				</Text>
				<Text
					fontSize={'20px'}
					color={colorMode === 'dark' ? 'lightgray' : 'gray.700'}
				>
					I am a quick learner and a team player, with a strong work ethic and a
					determination to succeed. I am excited to bring my skills and
					experience to a dynamic and innovative company, where I can continue
					to learn and grow as a developer.
				</Text>
				<Text
					fontSize={'20px'}
					color={colorMode === 'dark' ? 'lightgray' : 'gray.700'}
				>
					Thank you for taking the time to visit my blog/website. I hope you
					enjoy reading about my journey as a self-taught developer, and please
					feel free to contact me if you have any questions or opportunities.
				</Text>
			</Stack>
		</Container>
	)
}

export default About

// Path: pages/about.tsx
// Created at: 16:42:34 - 10/12/2022
// Language: Typescript
// Framework: React/Next.js
