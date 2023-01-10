import { Box, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { FC } from 'react'
import { BsArrowLeft } from 'react-icons/bs'

type Props = {}

const BackButton: FC<Props> = (): JSX.Element => {
	return (
		<Box mb={4} cursor={'pointer'}>
			<Link href={'/blog'}>
				<Flex alignItems={'center'}>
					<BsArrowLeft />
					<Text ml={2}>
						<a>back</a>
					</Text>
				</Flex>
			</Link>
		</Box>
	)
}

export default BackButton

// Path: components/BackButton.tsx
// Created at: 15:48:17 - 27/12/2022
// Language: Typescript
// Framework: React/Next.js
