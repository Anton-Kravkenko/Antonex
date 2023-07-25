import Icon from '@/app/components/ui/icon/icon'
import { socialMediaIcons } from '@/app/data/SocialMediaIcons'
const SocialMediaIcons = () => <div className='mt-5 flex items-center justify-center gap-3'>
	{
		socialMediaIcons.map(icon => (
			<Icon key={icon.id}
				icon={icon.icon}
				size={50}
				className='rounded-full border-2 border-twilight p-2.5'
				href={icon.href}
			/>
		))
	}
	</div>

export default SocialMediaIcons