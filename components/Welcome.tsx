import { Flex, Heading, Spacer } from '@chakra-ui/react'
import { FC } from 'react'

const Welcome: FC = (): JSX.Element => {
	return (
		<Flex flexDir={'column'} align={'center'} h={'calc(100vh - 80px)'}>
			{/* 80px is the height of the navbar */}
			<Spacer />
			<Heading mt={-32}>This site is currently under construction.</Heading>
			<Heading color={'green.400'}>
				<a href='mailto:info@rickbrown.co.uk'>rickbrown.co.uk</a>
			</Heading>
			<Spacer />
		</Flex>
	)
}

export default Welcome
