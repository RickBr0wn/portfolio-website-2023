import Image from 'next/image'
import { FC } from 'react'

type Props = {
	imgUrl: string
	alt: string
	height?: number
	width?: number
}

export const ImageLoader: FC<Props> = ({
	imgUrl,
	alt,
	width,
	height
}): JSX.Element => {
	if ((!height && width) || (height && !width)) {
		throw new Error('ImageLoader: width and height prop must be set together')
	}

	return (
		<Image
			src={imgUrl}
			alt={alt}
			layout={'responsive'}
			width={width && height ? width : 1600}
			height={width && height ? height : 900}
			placeholder={'blur'}
			blurDataURL={imgUrl}
			style={{
				borderRadius: '16px'
			}}
		/>
	)
}

export default ImageLoader

// Path: components/ImageLoader.tsx
// Created at: 00:41:08 - 11/12/2022
// Language: Typescript
// Framework: React/Next.js
