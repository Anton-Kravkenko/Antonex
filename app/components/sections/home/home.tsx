import Description from "@/app/components/ui/description/description";
import {counterData} from "@/app/data/counter";
import Counter from "@/app/components/sections/home/ui/counter/counter";
import SectionBox from "@/app/components/sections/ui/section-box/section-box";
import {Color} from "@/app/utils/colors";
import {AiOutlineHome} from "react-icons/ai";

const Home = () => {
	return <SectionBox mt={10} title={'Home'} icon={AiOutlineHome} description={
		<span>
			Say Hi from <a className='text-primary font-bold' href={`mailto: antonkzavcenco05@gmail.com`}>Anton</a>,
			Web Developer <br/> and  Mobile Developer
		</span>
	}>
		<Description className='mt-4 w-[80%]' color={Color.charcoal}>{
			"Im code beautiful and fast websites and mobile apps. I create websites and mobile apps that help businesses grow. I am a developer with a serious love for teaching."}
		</Description>
		
		<div className='flex gap-16 mt-10'>
			{counterData.map((item) => {
				return <Counter key={item.id} number={item.number} description={item.description} />
			})}
		</div>
	</SectionBox>
}

export default Home