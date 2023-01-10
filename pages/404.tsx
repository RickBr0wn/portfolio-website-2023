import { Container, Flex, Heading, Stack } from '@chakra-ui/react'
import { FC } from 'react'

type Props = {}

const FourZeroFour: FC<Props> = (): JSX.Element => {
	return (
		<Container h={'60%'}>
			<Stack h={'100%'} justifyContent={'center'} alignItems={'flex-start'}>
				<Heading fontSize={'6xl'}>404 - </Heading>

				<Heading fontSize={'2xl'}>This page does not exist.</Heading>
				<Heading fontSize={'2xl'}>If you think it should, let me know:</Heading>
				<Heading
					color={'blue.500'}
					textDecoration={'underline'}
					fontSize={'xl'}
				>
					<a href='mailto:info@rickbrown.co.uk'>rickbrown.co.uk</a>
				</Heading>
			</Stack>
		</Container>
	)
}

export default FourZeroFour

// Path: pages/404.tsx
// Created at: 02:17:57 - 14/12/2022
// Language: Typescript
// Framework: React/Next.js
