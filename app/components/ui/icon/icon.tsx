import { hoverOutAnimation } from '@/app/animation/hover'
import { clickProps, stylesProps } from '@/app/types/element-types'
import { IconTypeProps } from '@/app/types/global'
import { ColorProps } from '@/app/utils/colors'
import Link from 'next/link'
import { FC } from 'react'

export interface IconProps
	extends stylesProps,
		ColorProps,
		IconTypeProps,
		clickProps {
	size?: number
	href?: string
}
const Icon: FC<IconProps> = ({ className, ...props }) => {
	const icon = (
		<props.icon
			className={`${hoverOutAnimation} ${className}`}
			size={props.size}
			color={props.color}
		/>
	)
	return props.href ? <Link href={props.href}>{icon}</Link> : icon
}

export default Icon
