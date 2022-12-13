import { Box } from '@chakra-ui/react'
import { parseISO, format } from 'date-fns'
import { FC } from 'react'

type Props = {
	dateString: string
}

const Date: FC<Props> = ({ dateString }) => {
	const date = parseISO(dateString)

	return (
		<Box
			as={'time'}
			fontSize={'18px'}
			color={'lightgray'}
			opacity={0.6}
			dateTime={dateString}
		>
			{format(date, 'LLLL d, yyyy')}
		</Box>
	)
}

export default Date
