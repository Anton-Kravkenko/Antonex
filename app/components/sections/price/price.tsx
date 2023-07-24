import PriceCart from '@/app/components/sections/price/ui/price-cart'
import SectionBox from '@/app/components/sections/ui/section-box/section-box'
import { price } from '@/app/data/price'
import { lineColorType } from '@/app/utils/colors'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'

const Price = () => {
	return (
		<SectionBox
			title={'Price'}
			description={'Pricing Plans'}
			icon={RiMoneyDollarCircleLine}>
			{price.map(item => {
				return (
					<PriceCart
						key={item.id}
						hit={!!item.hit}
						title={item.title}
						color={item.color as lineColorType}
						price={item.price}
						period={item.period}
						description={item.description}
						icon={item.icon}
					/>
				)
			})}
		</SectionBox>
	)
}

export default Price
