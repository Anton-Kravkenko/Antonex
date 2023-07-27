import SectionLink from '@/app/components/sections/ui/section-box/ui/section-link/section.link'
import Heading from '@/app/components/ui/heading/heading'
import { IconTypeProps } from '@/app/types/global'
import { FC, PropsWithChildren } from 'react'

interface SectionBoxProps extends IconTypeProps {
	mt?: number
	title: string
	description?: string | JSX.Element
}
const SectionBox: FC<PropsWithChildren<SectionBoxProps>> = ({
	children,
	mt = 180,
	...props
}) => (
	<div
		style={{
			marginTop: mt
		}}>
		<SectionLink title={props.title} icon={props.icon} />
		{props.description && (
			<Heading size={48} className='mt-2'>
				{props.description}
			</Heading>
		)}
		{children}
	</div>
)

export default SectionBox
