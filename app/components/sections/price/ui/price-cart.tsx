import { hoverInAnimation } from '@/app/animation/hover'
import Description from '@/app/components/ui/description/description'
import Heading from '@/app/components/ui/heading/heading'
import Icon, { IconProps } from '@/app/components/ui/icon/icon'
import { Color, lineColorType } from '@/app/utils/colors'
import { FC } from 'react'

interface PriceCartProps extends Omit<IconProps, 'href'> {
	title: string
	price: string
	description: string
	hit: boolean
}
const PriceCart: FC<PriceCartProps> = props => (
	<div
		className={`${hoverInAnimation} m-2 ml-0 inline-block w-full rounded-xl border-0 bg-twilight p-4 lg:w-[400px]`}
		style={{
			border: props.hit ? '1px solid #FA7921' : '2px solid #1E1E1E'
		}}>
		<div className='flex items-center justify-between'>
			<Heading
				size={24}
				bold={props.hit}
				color={props.hit ? Color.sunshine : Color.white}>
				{props.title}
			</Heading>
			<Icon icon={props.icon} size={32} color={props.color as lineColorType} />
		</div>
		<Heading size={24} color={Color.charcoal} className='mt-8'>
			<span className='text-4xl font-bold text-primary'>{props.price}</span>
		</Heading>
		<hr className='my-8 text-charcoal' />
		<div>
			<Description
				className='w-full whitespace-normal'
				color={Color.silver}
				size={16}>
				{props.description}
			</Description>
		</div>
	</div>
)

export default PriceCart
