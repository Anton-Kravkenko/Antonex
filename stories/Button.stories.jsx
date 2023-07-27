import Button from '@/app/components/ui/button/button'

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		text: {
			control: 'text',
			defaultValue: 'Button',
			options: ['Button'],
			description: 'Button text'
		},
		type: {
			description: 'Button type',
			type: 'string ',
			options: ['primary', 'twilight', 'transparent', 'dusk'],
			control: {
				type: 'select'
			}
		},
		size: {
			description: 'Button size',
			type: 'string',
			options: ['sm', 'md', 'lg'],
			control: {
				type: 'select'
			}
		},
		href: {
			description: 'Button href',
			type: 'string'
		}
	}
}

const Template = args => <Button {...args}>{args.text}</Button>

export const button = Template.bind({})
button.args = {
	text: 'Button',
	type: 'primary',
	size: 'md',
	href: 'https://google.com'
}
