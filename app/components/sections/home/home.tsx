import Counter from '@/app/components/sections/home/ui/counter/counter'
import SectionBox from '@/app/components/sections/ui/section-box/section-box'
import Description from '@/app/components/ui/description/description'
import { counterData } from '@/app/data/counter'
import { Color } from '@/app/utils/colors'
import { AiOutlineHome } from 'react-icons/ai'

const Home = () => {
	return (
		<SectionBox
			mt={10}
			title={'Home'}
			icon={AiOutlineHome}
			description={
				<span>
					Say Hi from{' '}
					<a
						className='font-bold text-primary'
						href={`mailto: antonkzavcenco05@gmail.com`}>
						Anton
					</a>
					, Mobile Developer <br /> who loves to code and create new things.
				</span>
			}>
			<Description className='mt-4 w-[80%]' color={Color.charcoal}>
				{
					'Im code beautiful and fast mobile apps. I love to work with React Native. I have experience in developing mobile applications for Android and iOS'
				}
			</Description>

			<div className='mt-10 flex gap-16'>
				{counterData.map(item => {
					return (
						<Counter
							key={item.id}
							number={item.number}
							description={item.description}
						/>
					)
				})}
			</div>
		</SectionBox>
	)
}

export default Home
