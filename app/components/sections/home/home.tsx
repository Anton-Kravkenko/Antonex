"use client"
import Counter from '@/app/components/sections/home/ui/counter/counter'
import SectionBox from '@/app/components/sections/ui/section-box/section-box'
import Description from '@/app/components/ui/description/description'
import { counterData } from '@/app/data/counter'
import { useWindowSize } from '@/app/hook/getWindowDimensions'
import { Color } from '@/app/utils/colors'
import { AiOutlineHome } from 'react-icons/ai'

const Home = () => {
	const {width} = useWindowSize()
	return (
		<SectionBox
			mt={10}
			title={'Home'}
			icon={AiOutlineHome}
			descriptionSize={width && width < 768 ? 32 : 48}
			description={
				<span>
					Say Hi from {''}
					<a
						className='font-bold text-primary'
						href={`mailto: antonkzavcenco05@gmail.com`}>
						
						Anton
					</a>
					, Mobile Developer <br /> who <span className='text-crimson'>
					loves
				</span>  to  code and <br/>  create new things for people 🚀
				</span>
			}>
			<Description className='mt-4 w-[80%]' color={Color.charcoal}>
				{
					'Im code beautiful and fast mobile apps. I love to work with React Native. I have experience in developing mobile applications for Android and iOS'
				}
			</Description>

			<div className='mt-10 flex gap-16 flex-wrap'>
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
}

export default Home
