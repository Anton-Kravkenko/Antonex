import Button from '@/app/components/ui/button/button'
import Description from '@/app/components/ui/description/description'
import Heading from '@/app/components/ui/heading/heading'
import Icon, { IconProps } from '@/app/components/ui/icon/icon'
import { Color } from '@/app/utils/colors'
import { FC } from 'react'

interface SpecializationItemProps extends Omit<IconProps, 'href'> {
	title: string
	description: string
}
const SpecializationItem: FC<SpecializationItemProps> = props => (
		<Button
			type={'twilight'}
			className='mt-4 flex xl:w-[80%] justify-between rounded-xl p-4 sm:w-full
		'>
			<div>
				<Heading size={24} bold className='mt-1 mb-4'>
					{props.title}
				</Heading>
				<Description className='xl:w-[70%] smL w-full' color={Color.charcoal} size={16}>
					{props.description}
				</Description>
			</div>
			<div>
			<Icon icon={props.icon} size={props.size} color={props.color} />
			</div>
		</Button>
	)

export default SpecializationItem
