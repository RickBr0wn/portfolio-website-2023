import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { bundleMDX } from 'mdx-bundler'
import remarkGfm from 'remark-gfm'
import mdxPrism from 'mdx-prism'
import readingTime from 'reading-time'
import rehypeSlug from 'rehype-slug'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrism from 'rehype-prism-plus'

type Frontmatter = {
	title: string
	date: string
	description: string
}

const postsDirectory = path.join(process.cwd(), 'pages/posts')

export const getAllPostSlugs = async () => {
	const filenames = fs.readdirSync(postsDirectory)

	return filenames.map(filename => {
		return {
			params: {
				slug: filename.replace(/\.mdx$/, '')
			}
		}
	})
}

export const getBlogPostData = async () => {
	const filenames = fs.readdirSync(postsDirectory)

	const allPostsData = filenames.map(filename => {
		const slug = filename.replace(/\.mdx$/, '')

		const fullPath = path.join(postsDirectory, filename)
		const fileContents = fs.readFileSync(fullPath, 'utf8')

		const matterResult = matter(fileContents)

		return {
			slug,
			readTime: readingTime(fileContents).text,
			...(matterResult.data as Frontmatter)
		}
	})

	return allPostsData.sort((a, b) => {
		if (a.date < b.date) {
			return 1
		}
		return -1
	})
}

export const getPostData = async (slug: string) => {
	const fullPath = path.join(postsDirectory, `${slug}.mdx`)
	const mdxSource = fs.readFileSync(fullPath, 'utf8')

	const { code, frontmatter } = await bundleMDX({
		source: mdxSource,
		mdxOptions(options) {
			options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm]
			options.rehypePlugins = [
				...(options.rehypePlugins ?? []),
				rehypeSlug,
				rehypeCodeTitles,
				rehypeAutolinkHeadings,
				rehypePrism,
				mdxPrism
			]

			return options
		}
	})

	frontmatter.readTime = readingTime(mdxSource).text

	return {
		slug,
		frontmatter,
		code
	}
}
