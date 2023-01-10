import { Container, Flex } from '@chakra-ui/react'
import { FC } from 'react'
import Navbar from './Navbar'

type Props = {
	children: React.ReactNode
}

const Layout: FC<Props> = ({ children }): JSX.Element => {
	return (
		<Flex
			h={'100vh'}
			w={'100vw'}
			flexDirection={'column'}
			paddingX={{ base: 0, md: 4, lg: 8 }}
			bg={{
				md: 'red.600',
				lg: 'green.600'
			}}
		>
			<Navbar /> {/* This navbar is 80px tall */}
			<Container maxW={'container.md'}>{children}</Container>
		</Flex>
	)
}

export default Layout
