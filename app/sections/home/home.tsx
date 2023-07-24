import Description from "@/app/components/ui/description/description";
import Heading from "@/app/components/ui/heading/heading";
import {counterData} from "@/app/data/counter";
import Counter from "@/app/sections/home/ui/counter/counter";
import SectionLink from "@/app/sections/ui/section-link/section.link";
import {Color} from "@/app/utils/colors";
import {AiOutlineHome} from "react-icons/ai";

const Home = () => {
	return <div>
			<SectionLink title={"Home"} color={Color.white} icon={AiOutlineHome}/>
		<Heading size={48} className='mt-6'>
			Say Hi from <a className='text-primary font-bold' href={`mailto: antonkzavcenco05@gmail.com`}>Anton</a>,
			Web Developer <br/> and  Mobile Developer
		</Heading>
		<Description className='mt-4 w-[80%]' color={Color.charcoal}>
			{
`I'm a web developer and mobile developer. I can help you build a website or mobile application. I have experience in building websites and mobile applications using React, React Native, Next.js, TailwindCSS, and other technologies.`
			}
		</Description>
		
		<div className='flex gap-16 mt-10'>
			{counterData.map((item) => {
				return <Counter key={item.id} number={item.number} description={item.description} />
			})}
		</div>
	</div>
}

export default Home