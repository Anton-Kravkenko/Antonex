import {tech} from "@/app/data/tech";

export const counterData = [{
		id: 1,
		number: tech.map((item) => item.additions.length).reduce((a, b) => a + b, 0) + tech.length,
		description: 'Technologies',
}, {
		id: 2,
		number: 2000,
		description: 'Hours of coding',
},
	{
		id: 3,
		number: 10,
		description: 'Projects',
	}
]