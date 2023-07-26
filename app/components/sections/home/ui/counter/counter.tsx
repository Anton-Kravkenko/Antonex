import Description from '@/app/components/ui/description/description'
import Heading from '@/app/components/ui/heading/heading'
import { Color } from '@/app/utils/colors'
import { FC } from 'react'

interface CounterProps {
	number: number
	description: string
}
const Counter: FC<CounterProps> = props => (
	<div className='flex w-full items-center justify-center  sm:block sm:w-fit '>
		<div>
			<Heading color={Color.primary} size={56} bold>
				{props.number}+
			</Heading>
			<Description size={18} color={Color.charcoal}>
				{props.description}
			</Description>
		</div>
	</div>
)

export default Counter
