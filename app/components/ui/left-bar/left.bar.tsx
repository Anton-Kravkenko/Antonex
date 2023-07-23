import Button from "@/app/components/ui/button/button";
import Description from "@/app/components/ui/description/description";
import Heading from "@/app/components/ui/heading/heading";
import Icon from "@/app/components/ui/icon/icon";
import {githubLink, InstagramLink, TelegramLink, WatLink} from "@/app/data/constants";
import {Color} from "@/app/utils/colors";
import Image from "next/image";
import {BsGithub, BsTelegram} from "react-icons/bs";
import {IoLogoWhatsapp} from "react-icons/io";
import {TbBrandInstagram} from "react-icons/tb";

const LeftBar = () => {
	return <div className='w-[25%] fixed p-8 border-2 top-5 bottom-5 border-twilight rounded-2xl h-[calc(100vh-2.5rem)]
	'>
		<div className='flex justify-between  items-center'>
			<Heading color={Color.white} bold>👋 Anton K.</Heading>
			<div className='flex gap-5'>
		<Description size={12}>
				Mobile Developer <br/> &  Web Developer
		</Description>
			</div>
		</div>
			<Image src={'https://avatars.githubusercontent.com/u/112204520?v=4'} alt={'Anton'} width={200} height={200} className='rounded-xl w-full h-[250px] object-cover mt-5 mb-10 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer active:scale-100'
			       style={{ filter: "grayscale(70%)" }}
			/>
			<Heading center className='mb-2'>
				Middle Developer <br/> Based in Poland 🇲🇨
			</Heading>
		<Description center color={Color.charcoal} >
	All rights reserved © {new Date().getFullYear()}
		</Description>
		
		<div className='flex items-center justify-center gap-3 mt-5'>
			<Icon icon={BsGithub} size={50} className='border-twilight p-2.5 border-2 rounded-full' href={githubLink} />
			<Icon icon={BsTelegram} size={50} className='border-twilight p-2.5 border-2 rounded-full' href={TelegramLink} />
			<Icon icon={TbBrandInstagram} size={50} className='border-twilight p-2 border-2 rounded-full' href={InstagramLink} />
			<Icon icon={IoLogoWhatsapp} href={WatLink} size={50} className='border-twilight p-2.5 border-2 rounded-full' />
		</div>
		<Button href={"mailto: antonkzavcenco05@gmail.com"} className=' font-bold text-xl  absolute text-center rounded-xl items-center justify-center bottom-5 left-5 right-5'>
			Send me mail
		</Button>
	</div>
}

export default LeftBar