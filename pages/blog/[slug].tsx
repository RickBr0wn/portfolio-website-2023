/* eslint-disable @next/next/no-img-element */
import { GetStaticPaths, GetStaticProps } from 'next'
import { FC, useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Date from '../../components/Date'
import { getAllPostSlugs, getPostData } from '../../lib/posts'
import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import ImageLoader from '../../components/ImageLoader'

type Frontmatter = {
	title: string
	date: string
	description: string
	img: string
	credits: {
		name: string
		url: string
	}
}

type Props = {
	code: string
	frontmatter: Frontmatter
}

const components = {
	h1: (props: any) => <Heading fontSize={'6xl'} mb={6} {...props} />,
	h2: (props: any) => <Heading fontSize={'4xl'} mb={6} mt={10} {...props} />,
	h3: (props: any) => <Heading fontSize={'4xl'} {...props} />,
	h4: (props: any) => <Heading fontSize={'3xl'} {...props} />,
	h5: (props: any) => <Heading fontSize={'2xl'} {...props} />,
	h6: (props: any) => <Heading fontSize={'xl'} {...props} />,
	p: (props: any) => (
		<Text fontSize={'lg'} fontWeight={'light'} mb={6} {...props} />
	),
	i: (props: any) => <Text as={'i'} fontSize={'lg'} {...props} />,
	strong: (props: any) => (
		<Text as={'strong'} fontWeight={'extrabold'} fontSize={'xl'} {...props} />
	),
	img: (props: any) => (
		<Box borderRadius={'2xl'} mb={12}>
			<img {...props} alt={props.alt} />
		</Box>
	),
	a: (props: any) => <Text as={'a'} color={'blue.300'} {...props} />,
	ul: (props: any) => <Box as={'ul'} pl={8} mb={6} {...props} />,
	ol: (props: any) => <Box as={'ol'} pl={8} mb={6} {...props} />,
	li: (props: any) => <Text as={'li'} fontSize={'lg'} mb={2} {...props} />,
	code: (props: any) => (
		<Box
			as={'code'}
			mb={12}
			fontSize={'lg'}
			fontFamily={'mono'}
			color={'gray.400'}
			borderRadius={'md'}
			{...props}
		/>
	),
	blockquote: (props: any) => (
		<Box
			as={'blockquote'}
			fontSize={'lg'}
			fontFamily={'mono'}
			color={'gray.200'}
			borderRadius={'md'}
			{...props}
		/>
	)
}

const BlogPost: FC<Props> = ({ code, frontmatter }): JSX.Element => {
	const Component = useMemo(() => getMDXComponent(code), [code])

	return (
		<Container as={'section'} maxW={'container.md'}>
			<article itemScope itemType='http://schema.org/Article'>
				<Stack as={'header'} marginY={12}>
					<ImageLoader imgUrl={frontmatter.img} alt={'hero image'} />
					<Heading as={'h1'} fontSize={'6xl'} mb={12} itemProp='headline'>
						{frontmatter.title}
					</Heading>
					<Date dateString={frontmatter.date} />
					<Flex alignItems={'flex-end'}>
						<Text fontSize={'xs'} fontWeight={'light'} mr={1}>
							Photo by
						</Text>
						<Link
							href={frontmatter.credits.url}
							passHref
							target='_blank'
							rel='noopener noreferrer'
						>
							<Text
								as={'a'}
								fontSize={'xs'}
								fontWeight={'bold'}
								color={'blue.300'}
								mt={-10}
							>
								{frontmatter.credits.name}
							</Text>
						</Link>
					</Flex>
				</Stack>
				<section itemProp='articleBody'>
					<Component components={components} />
				</section>
			</article>
		</Container>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = await getAllPostSlugs()

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postData = await getPostData(params?.slug as string)

	return {
		props: {
			...postData
		}
	}
}

export default BlogPost

// Path: pages/blog/[slug].tsx
// Created at: 15:24:08 - 09/12/2022
// Language: Typescript
// Framework: React/Next.js
