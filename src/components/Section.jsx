import Card from "./Card"
import data from "../data"

function Section() {
	console.log(data)

	const cards = data.map(item => <Card key={item.id} item={item} />)

	return (
		<section>
			{cards}
		</section>
	)
}

export default Section