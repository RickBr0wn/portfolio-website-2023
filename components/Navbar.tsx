import { Button, Flex, Heading, Spacer, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { FC } from 'react'
import ToggleLightDark from './ToggleLightDark'

const Navbar: FC = (): JSX.Element => {
	return (
		<Flex
			as={'nav'}
			role={'navigation'}
			width={'100%'}
			padding={4}
			alignItems={'center'}
		>
			<Link href={'/'}>
				<a>
					{/* <Button variant='ghost'> */}
					<Heading fontSize={{ base: 18, md: 22, lg: 24 }} fontWeight={'black'}>
						Rick Brown
					</Heading>
					{/* </Button> */}
				</a>
			</Link>
			<Spacer />

			<Flex alignItems={'center'}>
				<Link href={'/about'}>
					<a>
						<Button variant='ghost' fontSize={{ base: 14, md: 16, lg: 18 }}>
							ABOUT
						</Button>
					</a>
				</Link>
				<Link href={'/blog'}>
					<a>
						<Button variant='ghost' fontSize={{ base: 14, md: 16, lg: 18 }}>
							BLOG
						</Button>
					</a>
				</Link>
				{/* <Link href={'/projects'}>
					<a>
						<Button variant='ghost'>PROJECTS</Button>
					</a>
				</Link> */}
				{/* <Link href={'/contact'}>
					<a>
						<Button variant='ghost'>CONTACT</Button>
					</a>
				</Link> */}
				<ToggleLightDark />
			</Flex>
		</Flex>
	)
}

export default Navbar
