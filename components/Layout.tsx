import { Container, Flex } from '@chakra-ui/react'
import { FC } from 'react'
import Navbar from './Navbar'

type Props = {
	children: React.ReactNode
}

const Layout: FC<Props> = ({ children }): JSX.Element => {
	return (
		<Flex h={'100vh'} w={'100vw'}>
			<Container maxW={1080}>
				<Navbar /> {/* This navbar is 80px tall */}
				{children}
			</Container>
		</Flex>
	)
}

export default Layout
