import About from '@/app/components/sections/about/about'
import HomeSection from '@/app/components/sections/home/home'
import LeftBar from '@/app/components/sections/left-bar/left.bar'
import Price from '@/app/components/sections/price/price'
import Projects from '@/app/components/sections/projects/projects'
import Specialization from '@/app/components/sections/specialization/specialization'
import Tech from '@/app/components/sections/tech/tech'

export default function Home() {
	return (
		<div className='items-center justify-between p-4'>
			<LeftBar />
			<div className='relative left-[30%] w-[70%] p-8'>
				<HomeSection />
				<Specialization />
				<Tech />
				<Price />
				<Projects />
				<About />
			</div>
		</div>
	)
}
