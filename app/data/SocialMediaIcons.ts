import { AiFillInstagram } from 'react-icons/ai'
import { BsGithub, BsTelegram } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'

export const githubLink = 'https://github.com/Anton-Kravkenko'
export const TelegramLink = 'https://t.me/AntonKravcenco'
export const WatLink = 'https://wa.me/+48794217947/'
export const InstagramLink = 'https://www.instagram.com/antonkravchenko78/'

export const socialMediaIcons = [
	{
		id: 1,
		href: githubLink,
		icon: BsGithub
	},
	{
		id: 2,
		href: TelegramLink,
		icon: BsTelegram
	},
	{
		id: 3,
		href: WatLink,
		icon: IoLogoWhatsapp
	},
	{
		id: 4,
		href: InstagramLink,
		icon: AiFillInstagram
	}
]
