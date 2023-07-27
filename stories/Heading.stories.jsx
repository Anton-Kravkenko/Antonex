import Heading from '../app/components/ui/heading/heading'

export default {
	title: 'Heading',
	argTypes: {
		text: {
			control: 'text',
			description: 'Heading text',
			type: { name: 'string', required: true }
		},
		size: {
			description: 'Heading size',
			type: 'number',
			options: [12 | 14 | 16 | 18 | 20]
		},
		center: {
			description: 'Center text',
			type: 'boolean',
			options: [true]
		},
		color: {
			name: 'color',
			description: 'Heading color',
			type: 'string'
		}
	}
}

const Template = args => <Heading {...args}>{args.text}</Heading>

export const heading = Template.bind({})

heading.args = {
	text: 'Heading',
	center: false,
	color: 'red'
}
