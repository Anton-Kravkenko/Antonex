'use client'
import Counter from '@/app/components/sections/home/ui/counter/counter'
import SectionBox from '@/app/components/sections/ui/section-box/section-box'
import Description from '@/app/components/ui/description/description'
import { counterData } from '@/app/data/counter'
import { Color } from '@/app/utils/colors'
import { AiOutlineHome } from 'react-icons/ai'

const Home = () => (
	<SectionBox mt={10} title={'Home'} icon={AiOutlineHome}>
		<h2 className='mt-2 text-3xl leading-[2rem]  lg:text-5xl lg:leading-[4rem]'>
			Say Hi from {''}
			<a
				className='font-bold text-primary'
				href={`mailto: antonkzavcenco05@gmail.com`}>
				Anton
			</a>
			, Mobile Developer <br /> who <span className='text-crimson'>loves</span>{' '}
			to code and <br /> create new things for people 🚀
		</h2>
		<Description className='mt-4 w-[80%]' color={Color.charcoal}>
			{
				'Im code beautiful and fast mobile apps. I love to work with React Native. I have experience in developing mobile applications for Android and iOS'
			}
		</Description>

		<div className='mt-10 flex flex-wrap gap-16'>
			{counterData.map(item => (
				<Counter
					key={item.id}
					number={item.number}
					description={item.description}
				/>
			))}
		</div>
	</SectionBox>
)

export default Home
