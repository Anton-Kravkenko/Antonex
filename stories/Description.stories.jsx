import Description from '../app/components/ui/description/description'

export default {
	title: 'Description',
	component: Description,
	argTypes: {
		text: {
			control: 'text'
		},
		size: {
			description: 'Description size',
			type: 'number',
			options: [12 | 14 | 16 | 18 | 20]
		},
		center: {
			description: 'Center text',
			type: 'boolean',
			options: [true | false]
		},
		color: {
			description: 'Description color',
			type: 'string',
			options: ['primary' | 'twilight' | 'dusk' | 'transparent']
		}
	}
}

const Template = args => <Description {...args}>{args.text}</Description>

export const description = Template.bind({})
description.args = {
	text: 'Description',
	size: 14,
	center: false,
	color: '#fff000'
}
