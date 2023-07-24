import Button from '@/app/components/ui/button/button'
import Description from '@/app/components/ui/description/description'
import Heading from '@/app/components/ui/heading/heading'
import Icon from '@/app/components/ui/icon/icon'
import {
	githubLink,
	InstagramLink,
	TelegramLink,
	WatLink
} from '@/app/data/constants'
import { Color } from '@/app/utils/colors'
import Image from 'next/image'
import { BsGithub, BsTelegram } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import { TbBrandInstagram } from 'react-icons/tb'

const LeftBar = () => {
	return (
		<div
			className='fixed bottom-5 top-5 h-[calc(100vh-2.5rem)] w-[25%] rounded-2xl border-2 border-twilight p-8
	'>
			<div className='flex items-center  justify-between'>
				<Heading color={Color.white} bold>
					👋 Anton K.
				</Heading>
				<div className='flex gap-5'>
					<Description size={12}>
						Mobile Developer <br /> & Startup Creator
					</Description>
				</div>
			</div>
			<Image
				src={'https://avatars.githubusercontent.com/u/112204520?v=4'}
				alt={'Anton'}
				width={200}
				height={200}
				className='mb-10 mt-5 h-[250px] w-full cursor-pointer rounded-xl object-cover transition-all duration-500 ease-in-out hover:scale-105 active:scale-100'
				style={{ filter: 'grayscale(70%)' }}
			/>
			<Heading center className='mb-2'>
				Middle Developer <br /> Based in Poland 🇲🇨
			</Heading>
			<Description center color={Color.charcoal}>
				All rights reserved © {new Date().getFullYear()}
			</Description>

			<div className='mt-5 flex items-center justify-center gap-3'>
				<Icon
					icon={BsGithub}
					size={50}
					className='rounded-full border-2 border-twilight p-2.5'
					href={githubLink}
				/>
				<Icon
					icon={BsTelegram}
					size={50}
					className='rounded-full border-2 border-twilight p-2.5'
					href={TelegramLink}
				/>
				<Icon
					icon={TbBrandInstagram}
					size={50}
					className='rounded-full border-2 border-twilight p-2'
					href={InstagramLink}
				/>
				<Icon
					icon={IoLogoWhatsapp}
					href={WatLink}
					size={50}
					className='rounded-full border-2 border-twilight p-2.5'
				/>
			</div>
			<Button
				href={'mailto: antonkzavcenco05@gmail.com'}
				className=' absolute bottom-5  left-5 right-5 items-center justify-center rounded-xl text-center text-xl font-bold'>
				Send me mail
			</Button>
		</div>
	)
}

export default LeftBar
