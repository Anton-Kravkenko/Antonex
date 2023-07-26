import SectionLink from '@/app/components/sections/ui/section-link/section.link'
import Heading from '@/app/components/ui/heading/heading'
import { IconTypeProps } from '@/app/types/global'
import { FC, PropsWithChildren } from 'react'

interface SectionBoxProps extends IconTypeProps {
	mt?: number
	title: string
	description: string | JSX.Element
	descriptionSize?: 18 | 24 | 32 | 48 | 56 | 64
}
const SectionBox: FC<PropsWithChildren<SectionBoxProps>> = ({
	children,
	descriptionSize = 48,
	mt = 180,
	...props
}) => (
		<div
			style={{
				marginTop: mt
			}}>
			<SectionLink title={props.title} icon={props.icon} />
			<Heading size={descriptionSize} className='mt-2'>
					{props.description}
				</Heading>
			{children}
		</div>
	)

export default SectionBox
