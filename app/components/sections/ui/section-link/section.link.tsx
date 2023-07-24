import Button from "@/app/components/ui/button/button";
import Description from "@/app/components/ui/description/description";
import Icon, {IconProps} from "@/app/components/ui/icon/icon";
import {Color} from "@/app/utils/colors";
import {FC,} from "react";

export interface SectionLinkProps extends  Omit<IconProps, 'href'> {
	title: string
}
const SectionLink:FC<SectionLinkProps> = ({icon, size = 16, title, color = Color.white, ...props}) => {
	return <div className='w-fit'>
		<Button size={'sm'} type={'twilight'} className='flex items-center bg-twilight w-fit rounded-full' {...props}>
			<Icon icon={icon} size={size} color={color} />
			<Description size={12} color={color} className='ml-2'>
				{title}
			</Description>
		</Button>
	</div>
}

export default SectionLink