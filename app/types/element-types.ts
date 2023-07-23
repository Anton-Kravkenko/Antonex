import {ButtonHTMLAttributes, CSSProperties} from "react";

export interface stylesProps {
	className?: string;
	style?: CSSProperties
}

export interface clickProps {
	onClick?: () => void;
}

export type DivProps = Pick<ButtonHTMLAttributes<HTMLDivElement>, 'children' | 'style' | 'onClick'
	| 'className' | 'id' | 'disabled'| 'role'
>