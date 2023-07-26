import SectionBox from '@/app/components/sections/ui/section-box/section-box'
import Button from '@/app/components/ui/button/button'
import Description from '@/app/components/ui/description/description'
import Heading from '@/app/components/ui/heading/heading'
import { about } from '@/app/data/about'
import { Color } from '@/app/utils/colors'
import { GoPerson } from 'react-icons/go'

const About = () => (
	<SectionBox title={'About'} description={'My dev way'} icon={GoPerson}>
		<Description className='w-[70%]' color={Color.charcoal} size={16}>
			{about.description}
		</Description>
		<Heading className='mb-2 mt-2' color={Color.silver}>
			Languages:
		</Heading>
		<div className='flex flex-wrap'>
			{about.language.map(lang => (
				<Button
					type='twilight'
					key={lang.name}
					className='mb-4 mr-3 w-full items-center rounded-lg border-2 border-dusk bg-none p-4 transition-all duration-300 hover:border-primary sm:w-fit'>
					<Heading size={24}>{lang.name}</Heading>
					<Description color={Color.charcoal} size={16}>
						{lang.level}
					</Description>
				</Button>
			))}
		</div>
	</SectionBox>
)

export default About
