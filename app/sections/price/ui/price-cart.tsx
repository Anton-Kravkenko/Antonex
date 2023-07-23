import Description from "@/app/components/ui/description/description";
import Heading from "@/app/components/ui/heading/heading";
import Icon, {IconProps} from "@/app/components/ui/icon/icon";
import {Color, lineColorType} from "@/app/utils/colors";
import {FC} from "react";

interface PriceCartProps extends   Omit<IconProps, 'href'>{
	title: string
	price: string
	period: string
	description: string
	hit: boolean

}

const PriceCart:FC<PriceCartProps> = (props) => {
	return <div className=' bg-twilight inline-block border-0 p-4 w-[400px] rounded-xl scale-100 ml-0 m-2 hover:scale-95 duration-75 ease-linear' style={{
		border: props.hit ? '1px solid #FA7921' : '2px solid #1E1E1E'
	}} >
	<div className='justify-between items-center flex'>
	<Heading size={24}
	         bold={props.hit}
		color={props.hit ? Color.sunshine : Color.white}
	>
		{props.title}
		</Heading>
		<Icon icon={props.icon} size={32} color={props.color as lineColorType} />
	</div>
	<Heading size={24} color={Color.charcoal} className='mt-8'>
	<span className='text-primary font-bold text-4xl'>{props.price}</span> / {props.period}
	</Heading>
	<hr className='my-8 text-charcoal'/>
	<div>
		<Description className='w-full whitespace-normal' color={Color.silver} size={16}>
		{props.description}
		</Description>
		</div>
		</div>
}

export default PriceCart