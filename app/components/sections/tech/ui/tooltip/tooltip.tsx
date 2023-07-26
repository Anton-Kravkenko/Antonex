import Heading from '@/app/components/ui/heading/heading'
import Icon from '@/app/components/ui/icon/icon'
import { TechAdditions } from '@/app/data/tech'
import { Color, lineColorType } from '@/app/utils/colors'
import { FC } from 'react'

export interface TooltipProps {
	additions: TechAdditions[]
}
const Tooltip: FC<TooltipProps> = ({ additions }) => (
		<span className='xl:bottom-[-50px] lg:justify-normal left-0 justify-between w-fit absolute z-50 flex scale-0 flex-wrap rounded-lg bg-twilight p-2 transition-all duration-300 group-hover:scale-100'>
			{additions.map(item => (
					<div
						key={item.id}
						className='w-[100%] lg:w-fit m-2 scale-100 rounded-xl border-2 border-dusk p-4 duration-75 ease-linear hover:scale-105 hover:border-primary'>
						<Icon
							icon={item.icon}
							className='mx-auto'
							color={item.color as lineColorType}
							size={48}
						/>
						<Heading
							size={18}
							color={Color.primary}
							bold
							center
							className='mt-4'>
							{item.title}
						</Heading>
					</div>
				))}
		</span>
	)

export default Tooltip
