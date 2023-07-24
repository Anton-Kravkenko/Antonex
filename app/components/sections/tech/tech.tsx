import {tech} from "@/app/data/tech";
import Stack from "@/app/components/sections/tech/ui/stack";
import SectionBox from "@/app/components/sections/ui/section-box/section-box";
import {lineColorType} from "@/app/utils/colors";
import {AiOutlineRadarChart} from "react-icons/ai";

const Tech = () => {
	return <SectionBox title={"Tech"} description={"My Skills"} icon={AiOutlineRadarChart}>
			<div className='flex w-full gap-5 mt-4 flex-wrap relative'>
				{
					tech.map((item) => {
						return <Stack  loved={!!item.loved} additions={item.additions} title={item.title} progress={item.progress} icon={item.icon}
						               color={item.color as lineColorType} key={item.id}
						/>
					} )
				}
			</div>
		</SectionBox>
		
}

export default Tech