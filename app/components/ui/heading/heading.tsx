import { Color, ColorProps } from '@/app/utils/colors'
import { FC, HTMLProps, ReactNode } from 'react'

interface TitleProps
	extends ColorProps,
		Omit<HTMLProps<HTMLHeadingElement>, 'children' | 'color'> {
	children: ReactNode
	size?: 18 | 24 | 32 | 48 | 56 | 64
	bold?: boolean
	center?: boolean
}
const Heading: FC<TitleProps> = ({ style, ...props }) => {
	return (
		<h2
			style={{
				fontSize: props.size || '24px',
				fontWeight: props.bold ? 'bold' : 'normal',
				color: props.color || Color.white,
				textAlign: props.center ? 'center' : 'left',
				...style
			}}
			{...props}>
			{props.children}
		</h2>
	)
}

export default Heading
