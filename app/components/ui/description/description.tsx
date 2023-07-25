import { ColorProps } from '@/app/utils/colors'
import { FC, HTMLProps, ReactNode } from 'react'

interface DescriptionProps
	extends ColorProps,
		Omit<HTMLProps<HTMLHeadingElement>, 'children' | 'color'> {
	children: ReactNode
	size?: 12 | 14 | 16 | 18
	center?: boolean
}
const Description: FC<DescriptionProps> = ({ children, style, ...props }) => (
		<h5
			style={{
				fontSize: props.size,
				color: props.color,
				textAlign: props.center ? 'center' : 'left',
				...style
			}}
			{...props}>
			{children}
		</h5>
	)

export default Description
