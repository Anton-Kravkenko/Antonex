import Stack from '@/app/components/sections/tech/ui/stack'
import SectionBox from '@/app/components/sections/ui/section-box/section-box'
import { tech } from '@/app/data/tech'
import { lineColorType } from '@/app/utils/colors'
import { AiOutlineRadarChart } from 'react-icons/ai'

const Tech = () => {
	return (
		<SectionBox
			title={'Tech'}
			description={'My Hard Skills'}
			icon={AiOutlineRadarChart}>
			<div className='relative mt-4 flex w-full flex-wrap gap-5'>
				{tech.map(item => {
					return (
						<Stack
							loved={!!item.loved}
							additions={item.additions}
							title={item.title}
							progress={item.progress}
							icon={item.icon}
							color={item.color as lineColorType}
							key={item.id}
						/>
					)
				})}
			</div>
		</SectionBox>
	)
}

export default Tech
