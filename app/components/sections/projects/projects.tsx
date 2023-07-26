import SectionBox from '@/app/components/sections/ui/section-box/section-box'
import Button from '@/app/components/ui/button/button'
import Description from '@/app/components/ui/description/description'
import Heading from '@/app/components/ui/heading/heading'
import { projects } from '@/app/data/projects/projects'
import { githubLink } from '@/app/data/SocialMediaIcons'
import { Color } from '@/app/utils/colors'
import Image from 'next/image'
import { AiOutlineCode } from 'react-icons/ai'

const Projects = () => (
	<SectionBox
		title={'Projects'}
		description={'Best Projects'}
		icon={AiOutlineCode}>
		<div className='lg:w-[85%]'>
			<Description color={Color.charcoal} size={16}>
				Check my{' '}
				<a href={githubLink} className='font-bold text-primary'>
					Github
				</a>{' '}
				for more projects
			</Description>
			{projects.map(project => (
				<Button
					type={'twilight'}
					className='mt-10 flex h-full gap-3 rounded-xl'
					key={project.title}>
					<div className='hidden sm:block'>
						<Image
							key={project.image}
							src={project.image}
							alt={'Image'}
							className=' rounded-lg'
						/>
					</div>
					<div className='grid h-auto items-center justify-between'>
						<div className='flex items-center justify-between'>
							<Heading size={32} bold>
								{project.title}
							</Heading>
							<a
								href={project.githubLink}
								className='rounded-lg bg-midnight p-1 px-2'>
								Github
							</a>
						</div>
						<Description color={Color.charcoal} size={16}>
							{project.description}
						</Description>
						<div className='flex h-fit flex-wrap'>
							<Heading size={18} bold className='mr-4 mt-3.5'>
								Technologies:
							</Heading>
							{project.technologies.map(link => (
								<div
									key={link}
									className='sm:text-md mr-2 mt-2 rounded-xl bg-dusk p-2 text-[14px] font-bold text-primary'>
									{link}
								</div>
							))}
						</div>
					</div>
				</Button>
			))}
		</div>
	</SectionBox>
)

export default Projects
