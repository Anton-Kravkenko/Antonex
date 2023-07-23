import Heading from "@/app/components/ui/heading/heading";
import {specialization} from "@/app/data/specialization";
import SpecializationItem from "@/app/sections/specialization/ui/specialization-item";
import SectionBox from "@/app/sections/ui/section-box/section-box";
import {RiArrowRightDoubleLine} from "react-icons/ri";

const Specialization = () => {
	return <SectionBox title={"Specialization"} description={"What I do"} icon={RiArrowRightDoubleLine}>
		{
			specialization.map((item) => {
				return <SpecializationItem key={item.id} size={36} title={item.title} description={item.description} icon={item.icon}/>
			})
		}
	</SectionBox>
}

export default Specialization