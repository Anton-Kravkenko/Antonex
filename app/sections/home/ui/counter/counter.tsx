import Description from "@/app/components/ui/description/description";
import Heading from "@/app/components/ui/heading/heading";
import {FC} from "react";
import {Color} from "@/app/utils/colors";

interface CounterProps {
	number: number
	description: string
}
const Counter:FC<CounterProps> = (props) => {
	return <div>
		<Heading color={Color.primary}  size={56} bold>
			{props.number}+
		</Heading>
		<Description size={18} color={Color.charcoal}>
			{props.description}
		</Description>
	</div>
}

export default Counter