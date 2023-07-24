import Heading from "@/app/components/ui/heading/heading";
import Icon from "@/app/components/ui/icon/icon";
import {TechAdditions} from "@/app/data/tech";
import {Color, lineColorType} from "@/app/utils/colors";
import {FC} from "react";

export interface  TooltipProps {
	additions: TechAdditions[]
	}
const Tooltip:FC<TooltipProps> = ({additions}) => {
	return <span className="absolute z-50 w-fit flex-wrap flex bottom-[-50px] scale-0 transition-all rounded-lg bg-twilight p-2 group-hover:scale-100 duration-300">
				{
					additions.map((item) => {
						return <div key={item.id} className='p-4 scale-100 border-dusk border-2 m-2 rounded-xl hover:border-primary duration-75 ease-linear hover:scale-105'>
							<Icon icon={item.icon} className='mx-auto'  color={item.color as lineColorType} size={48} />
							<Heading size={18} color={Color.primary} bold center className='mt-4'>
								{item.title}
							</Heading>
						</div>
					} )
				}
			</span>
}

export default Tooltip