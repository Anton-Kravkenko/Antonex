import Icon from '@/app/components/ui/icon/icon'
import { socialMediaIcons } from '@/app/data/SocialMediaIcons'
import { stylesProps } from '@/app/types/element-types'
import { FC } from 'react'

interface SocialMediaIconsProps extends stylesProps {
	size: number
}
const SocialMediaIcons: FC<SocialMediaIconsProps> = ({ ...props }) => (
	<>
		{socialMediaIcons.map(icon => (
			<Icon key={icon.id} icon={icon.icon} href={icon.href} {...props} />
		))}
	</>
)

export default SocialMediaIcons
