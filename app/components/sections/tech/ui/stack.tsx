import Heading from "@/app/components/ui/heading/heading";
import Icon, {IconProps} from "@/app/components/ui/icon/icon";
import {TechAdditions} from "@/app/data/tech";
import Tooltip from "@/app/components/sections/tech/ui/tooltip/tooltip";
import {Color} from "@/app/utils/colors";
import {FC} from "react";
import {HiFire} from "react-icons/hi";

interface  StackProps extends IconProps{
	title: string
	progress: number
	loved: boolean
	additions: TechAdditions[]
}
const Stack:FC<StackProps> = (props) => {
	return <div className='items-center justify-center'>
		<button className='p-5 border-2 overflow-visible group border-twilight rounded-2xl w-[150px] h-[190px] flex justify-center items-center hover:border-primary duration-300 ease-linear'>
		<Tooltip additions={props.additions}/>
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
		{props.loved && <div className='p-2 absolute top-[-10px] ml-[-10px] bg-twilight rounded-full'>
			<Icon icon={HiFire} size={32} color={Color.crimson} />
		</div>}
	</div>
}

export default Stack