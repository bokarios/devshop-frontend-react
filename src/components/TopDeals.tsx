import DealCard from './DealCard'
import Partners from './Partners'

function TopDeals() {
	const deals = [
		{
			id: 1,
			title: '20% off on tank tops',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porin ac dictum.',
			image: '/img/women-fashion-free-img.jpg',
		},
		{
			id: 2,
			title: 'sunglasses for you',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porin ac dictum.',
			image: '/img/men-fashion-free-img.jpg',
		},
		{
			id: 3,
			title: "let's lorem suit up!",
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porin ac dictum.',
			image: '/img/footwear-free-img.jpg',
		},
	]

	return (
		<div className="w-full max-w-[1440px] mx-auto px-32">
			<Partners />
			<div className="w-full mb-32">
				<div className="grid grid-cols-3 gap-5">
					{deals.map((deal) => (
						<DealCard key={deal.id} deal={deal} />
					))}
				</div>
			</div>
		</div>
	)
}

export default TopDeals
