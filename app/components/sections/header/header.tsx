import SocialMediaIcons from '@/app/components/sections/left-bar/ui/social-media-icons/social-media-icons'
import Button from '@/app/components/ui/button/button'
import Heading from '@/app/components/ui/heading/heading'
import { about } from '@/app/data/about'
import { Color } from '@/app/utils/colors'

const Header = () => (
	<div className='fixed left-0 top-0 z-50 flex h-[50px] w-full items-center justify-between rounded-b-2xl border-b-2 border-twilight bg-dusk px-4 sm:h-[65px] xl:hidden'>
		<Heading size={20} color={Color.white} bold>
			👋 {about.name}
		</Heading>
		<div className='flex items-center'>
			<div className='flex items-center gap-3'>
				<SocialMediaIcons size={26} />
			</div>
			<Button
				href={'mailto: antonkzavcenco05@gmail.com'}
				size={'sm'}
				className='text-md ml-4 hidden items-center justify-center rounded-xl text-center font-bold sm:block'>
				Send me mail
			</Button>
		</div>
	</div>
)

export default Header
