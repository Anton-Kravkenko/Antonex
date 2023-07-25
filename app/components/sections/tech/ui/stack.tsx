import Tooltip from '@/app/components/sections/tech/ui/tooltip/tooltip'
import Heading from '@/app/components/ui/heading/heading'
import Icon, { IconProps } from '@/app/components/ui/icon/icon'
import { TechAdditions } from '@/app/data/tech'
import { Color } from '@/app/utils/colors'
import { FC } from 'react'
import { HiFire } from 'react-icons/hi'

interface StackProps extends IconProps {
	title: string
	progress: number
	loved: boolean
	additions: TechAdditions[]
}
const Stack: FC<StackProps> = props => (
		<div className='items-center justify-center'>
			<button className='group flex h-[190px] w-[150px] items-center justify-center overflow-visible rounded-2xl border-2 border-twilight p-5 duration-300 ease-linear hover:border-primary'>
				<Tooltip additions={props.additions} />
				<div>
					<Icon icon={props.icon} size={80} color={props.color} />
					<Heading size={24} color={Color.primary} bold center className='mt-4'>
						{props.progress}%
					</Heading>
				</div>
			</button>
			<Heading center size={24} className='mt-2'>
				{props.title}
			</Heading>
			{props.loved && (
				<div className='absolute top-[-10px] ml-[-10px] rounded-full bg-twilight p-2'>
					<Icon icon={HiFire} size={32} color={Color.crimson} />
				</div>
			)}
		</div>
	)

export default Stack
