import Description from "@/app/components/ui/description/description";
import Heading from "@/app/components/ui/heading/heading";
import {about} from "@/app/data/about";
import SectionBox from "@/app/sections/ui/section-box/section-box";
import {Color} from "@/app/utils/colors";
import {GoPerson} from "react-icons/go";
const About = () => {
	return <SectionBox title={"About"} description={"My dev way"} icon={GoPerson}>
		<Description className='w-[70%]' color={Color.charcoal} size={16}>
			{
				about.description
			}
		</Description>
		<Heading className='mb-2 mt-2' color={Color.silver}>
			Languages:
		</Heading>
		<div className='flex '>
			{about.language.map((lang) => {
				return <div key={lang.name} className='border-2 scale-100 border-dusk bg-none p-4 mr-3 rounded-lg items-center hover:scale-105 transition-all duration-300 ease-linear active:scale-100'>
					<Heading size={24}>
						{lang.name}
					</Heading>
					<Description color={Color.charcoal} size={16}>
						{lang.level}
					</Description>
				</div>
			})
			}
		</div>
	</SectionBox>
}

export default About
