import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
	return (
		<main role='main'>
			<Image
				src={'https://d2d4rtarj3og8s.cloudfront.net/avatar.png'}
				width={200}
				height={200}
				alt='avatar'
			/>
		</main>
	)
}

export default Home
