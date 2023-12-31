import PriceCart from '@/app/components/sections/price/ui/price-cart'
import SectionBox from '@/app/components/sections/ui/section-box/section-box'
import { price } from '@/app/data/price'
import { lineColorType } from '@/app/utils/colors'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'

const Price = () => (
	<SectionBox
		title={'Price'}
		description={'Pricing Plans'}
		icon={RiMoneyDollarCircleLine}>
		{price.map(item => (
			<PriceCart
				key={item.id}
				hit={!!item.hit}
				title={item.title}
				color={item.color as lineColorType}
				price={item.price}
				description={item.description}
				icon={item.icon}
			/>
		))}
	</SectionBox>
)

export default Price
