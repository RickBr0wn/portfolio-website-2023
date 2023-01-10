import { GetStaticProps } from 'next'
import Link from 'next/link'
import { FC } from 'react'
import { getBlogPostData } from '../../lib/posts'
import Date from '../../components/Date'
import {
	Container,
	Flex,
	Heading,
	Stack,
	Text,
	useColorMode
} from '@chakra-ui/react'

type PostData = {
	title: string
	date: string
	description: string
	img: string
	credits: {
		name: string
		url: string
	}
	slug: string
	readTime: string
}

type Props = {
	allPostsData: PostData[]
}

const BlogList: FC<Props> = ({ allPostsData }): JSX.Element => {
	const { colorMode } = useColorMode()

	return (
		<Flex w={'100%'} mt={12} flexDirection={'column'}>
			{allPostsData.map(({ title, date, description, slug, readTime }) => (
				<Link href={`/blog/${slug}`} key={slug}>
					<a>
						<Stack key={slug} mb={12}>
							<Heading
								fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
								fontWeight={'black'}
							>
								{title}
							</Heading>
							<Flex justifyContent={'space-between'}>
								<Date dateString={date} />
								<Text
									fontSize={{ base: '14px', md: '16px', lg: '18px' }}
									color={colorMode === 'dark' ? 'lightgray' : 'gray.700'}
									opacity={0.6}
								>
									{readTime}
								</Text>
							</Flex>
							<Text
								fontSize={{ base: '16px', md: '18px', lg: '20px' }}
								color={colorMode === 'dark' ? 'lightgray' : 'gray.700'}
							>
								{description}
							</Text>
						</Stack>
					</a>
				</Link>
			))}
		</Flex>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const allPostsData = await getBlogPostData()

	return {
		props: {
			allPostsData
		}
	}
}

export default BlogList

// Path: pages/blog/index.tsx
// Created at: 15:20:30 - 09/12/2022
// Language: Typescript
// Framework: React/Next.js
