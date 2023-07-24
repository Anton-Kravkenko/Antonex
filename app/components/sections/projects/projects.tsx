import Button from "@/app/components/ui/button/button";
import Description from "@/app/components/ui/description/description";
import Heading from "@/app/components/ui/heading/heading";
import {githubLink} from "@/app/data/constants";
import {projects} from "@/app/data/projects/projects";
import SectionBox from "@/app/components/sections/ui/section-box/section-box";
import {Color} from "@/app/utils/colors";
import Image from "next/image";
import {AiOutlineCode} from "react-icons/ai";

const Projects = () => {
	return <SectionBox title={"Projects"} description={"Best Projects"} icon={AiOutlineCode}>
			<div className='w-[85%]'>
				<Description color={Color.charcoal} size={16}>
					Check my <a href={githubLink} className='text-primary font-bold'>
					Github
				</a> for more projects
				</Description>
				{
					projects.map((project) => {
						return <Button type={'twilight'} className='mt-10 h-full rounded-xl flex gap-3' key={project.title}>
							<Image key={project.image} src={project.image} alt={'Image'} className='w-[150px] rounded-lg'/>
							<div className='justify-between h-auto grid items-center'>
								<div className='justify-between flex items-center'>
									<Heading size={32} bold>
										{project.title}
									</Heading>
									<a href={project.githubLink} className='p-1 bg-midnight rounded-lg px-2'>
										Github
									</a>
								</div>
								<Description  color={Color.charcoal} size={16}>
									{project.description}
								</Description>
								<div className='flex flex-wrap h-fit'>
									<Heading size={18} bold className='mt-3.5 mr-4'>
										Technologies:
									</Heading>
									{
										project.technologies.map((link) => {
											return <div key={link} className='text-primary p-2 text-md s mr-2 mt-2 bg-dusk rounded-xl font-bold'>
												{link}
											</div>
										})
									}
								</div>
							</div>
						</Button>
					})
				}
			</div>
		</SectionBox>
}

export default Projects