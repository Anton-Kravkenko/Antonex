import { IconTypeProps } from '@/app/types/global'
import { BiLogoPostgresql, BiLogoSass, BiLogoTypescript } from 'react-icons/bi'
import { BsGit } from 'react-icons/bs'
import { FaReact } from 'react-icons/fa'
import { GiJesterHat } from 'react-icons/gi'
import { GrNode } from 'react-icons/gr'
import { MdAnimation, MdGesture } from 'react-icons/md'
import {
	SiApollographql,
	SiBabel,
	SiEslint,
	SiExpo,
	SiExpress,
	SiI18Next,
	SiMongodb,
	SiMui,
	SiNestjs,
	SiNextdotjs,
	SiPrettier,
	SiReacthookform,
	SiReactquery,
	SiReactrouter,
	SiStorybook,
	SiTailwindcss,
	SiTestinglibrary,
	SiWebpack
} from 'react-icons/si'
import {
	TbBrandGraphql,
	TbBrandReactNative,
	TbBrandRedux
} from 'react-icons/tb'

export interface TechAdditions extends IconTypeProps {
	id: number
	color: string
	title: string
}
export const tech = [
	{
		id: 2,
		color: '#456990',
		icon: FaReact,
		title: 'Frontend',
		progress: 77,
		additions: [
			{
				id: 1,
				color: '#444140',
				title: 'Next.js',
				icon: SiNextdotjs
			},
			{
				id: 2,
				color: '#F40000',
				title: 'React Router',
				icon: SiReactrouter
			},
			{
				id: 3,
				color: '#2F4858',
				title: 'Webpack',
				icon: SiWebpack
			},
			{
				id: 4,
				color: '#FF6666',
				icon: SiReacthookform,
				title: 'Hook Form'
			},
			{
				id: 5,
				color: '#4BC0D9',
				icon: SiReactquery,
				title: 'React Query'
			},

			{
				id: 6,
				color: '#9E7682',
				icon: SiApollographql,
				title: 'Apollo'
			}
		]
	},
	{
		id: 3,
		icon: SiNestjs,
		color: '#BA324F',
		title: 'Backend',
		progress: 84,
		additions: [
			{
				id: 0,
				color: '#4A7C59',
				title: 'Node.js',
				icon: GrNode
			},
			{
				id: 1,
				color: '#586F7C',
				title: 'Express.js',
				icon: SiExpress
			},
			{
				id: 2,
				color: '#82204A',
				title: 'GraphQL',
				icon: TbBrandGraphql
			},
			{
				id: 3,
				color: '#659157',
				icon: SiMongodb,
				title: 'MongoDB'
			},
			{
				id: 4,
				color: '#3066BE',
				icon: BiLogoPostgresql,
				title: 'PostgreSQL'
			}
		]
	},
	{
		id: 4,
		color: '#9984D4',
		icon: TbBrandReactNative,
		title: 'Mobile',
		loved: true,
		progress: 98,
		additions: [
			{
				id: 1,
				color: '#fff',
				title: 'Expo',
				icon: SiExpo,
				progress: 99
			},
			{
				id: 2,
				color: '#FF8600',
				icon: SiBabel,
				title: 'Babel'
			},
			{
				id: 3,
				color: '#F39C6B',
				icon: MdAnimation,
				title: 'Animation'
			},
			{
				id: 4,
				color: '#A4036F',
				icon: MdGesture,
				title: 'Gesture'
			}
		]
	},
	{
		id: 6,
		color: '#779FA1',
		icon: BiLogoTypescript,
		title: 'Other',
		progress: 99,
		additions: [
			{
				id: 1,
				icon: BsGit,
				color: '#E98A15',
				title: 'Git'
			},
			{
				id: 2,
				color: '#59114D',
				icon: TbBrandRedux,
				title: 'Redux'
			},
			{
				id: 3,
				color: '#7B9E89',
				icon: SiPrettier,
				title: 'Prettier'
			},
			{
				id: 4,
				color: '#7765E3',
				icon: SiEslint,
				title: 'ESLint'
			},
			{
				id: 5,
				color: '#A36D90',
				icon: BiLogoSass,
				title: 'Sass'
			},
			{
				id: 6,
				color: '#53B3CB',
				icon: SiTailwindcss,
				title: 'Tailwind'
			},
			{
				id: 7,
				color: '#36F1CD',
				icon: SiMui,
				title: 'MUI'
			},

			{
				id: 10,
				color: '#0B6E4F',
				icon: SiI18Next,
				title: 'i18next'
			},
			{
				id: 9,
				color: '#AA3E98',
				icon: SiStorybook,
				title: 'Storybook'
			},
			{
				id: 11,
				color: '#F8333C',
				title: 'Jest',
				icon: GiJesterHat
			},

			{
				id: 0,
				color: '#FFFD82',
				icon: SiTestinglibrary,
				title: 'Testing Library'
			}
		]
	}
]
