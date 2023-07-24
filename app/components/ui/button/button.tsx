import { hoverAnimation } from '@/app/animation/hover'
import {
	buttonBackground,
	buttonPadding,
	fontSize
} from '@/app/components/ui/button/button-settings'
import { DivProps } from '@/app/types/element-types'
import Link from 'next/link'
import { FC, PropsWithChildren, memo } from 'react'

interface ButtonProps extends DivProps {
	type?: 'primary' | 'twilight' | 'transparent' | 'dusk'
	size?: 'sm' | 'md' | 'lg'
	href?: string
}
const Button: FC<PropsWithChildren<ButtonProps>> = ({
	children,
	style,
	className,
	...props
}) => {
	const button = (
		<div
			className={`${hoverAnimation} ${className} cursor-pointer font-bold`}
			style={{
				backgroundColor: buttonBackground[props.type || 'primary'],
				fontSize: fontSize[props.size || 'md'],
				padding: buttonPadding[props.size || 'md'],
				...style
			}}
			{...props}>
			{children}
		</div>
	)

	return props.href ? <Link href={props.href}>{button}</Link> : button
}

export default memo(Button)
