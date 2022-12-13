import { FC } from 'react'
import ImageLoader from '../components/ImageLoader'

type Props = {}

const About: FC<Props> = (): JSX.Element => {
	return (
		<ImageLoader
			imgUrl={'https://d2d4rtarj3og8s.cloudfront.net/useFetch_title.jpg'}
			alt={'image'}
		/>
	)
}

export default About

// Path: pages/about.tsx
// Created at: 16:42:34 - 10/12/2022
// Language: Typescript
// Framework: React/Next.js
