import { Box, useColorMode } from '@chakra-ui/react'
import { parseISO, format } from 'date-fns'
import { FC } from 'react'

type Props = {
	dateString: string
}

const Date: FC<Props> = ({ dateString }) => {
	const date = parseISO(dateString)
	const { colorMode } = useColorMode()

	return (
		<Box
			as={'time'}
			fontSize={{ base: '14px', md: '16px', lg: '18px' }}
			color={colorMode === 'dark' ? 'lightgray' : 'gray.700'}
			opacity={0.6}
			dateTime={dateString}
		>
			{format(date, 'LLLL d, yyyy')}
		</Box>
	)
}

export default Date
