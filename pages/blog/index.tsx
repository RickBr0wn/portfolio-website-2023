import { GetStaticProps } from 'next'
import Link from 'next/link'
import { FC } from 'react'
import { getBlogPostData } from '../../lib/posts'
import Date from '../../components/Date'
import { Container, Flex, Heading, Stack, Text } from '@chakra-ui/react'

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
}

type Props = {
	allPostsData: PostData[]
}

const BlogList: FC<Props> = ({ allPostsData }): JSX.Element => {
	return (
		<Flex w={'100%'} mt={12}>
			<Stack gap={12} width={'100%'}>
				<Container as={'section'} maxW={'container.md'}>
					{allPostsData.map(({ title, date, description, img, slug }) => (
						<Link href={`/blog/${slug}`} key={slug}>
							<a>
								<Stack key={slug} mb={12}>
									<Heading>{title}</Heading>
									<Date dateString={date} />
									<Text fontSize={'20px'} color={'lightgray'}>
										{description}
									</Text>
								</Stack>
							</a>
						</Link>
					))}
				</Container>
			</Stack>
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
