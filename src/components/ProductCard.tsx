import { StarIcon } from '@heroicons/react/24/solid'
import { ProductType } from '../types'
import { Link } from 'react-router-dom'

interface PropsType {
	product: ProductType
}

function ProductCard({ product }: PropsType) {
	const renderOptions = () => {
		if (product.variations.length > 0) {
			return product.variations.map((variation) => (
				<div
					key={variation.id}
					className="w-6 h-6 rounded-full bg-gray-50 border border-transparent transition-colors duration-300 ease mt-2 p-0.5 hover:border-gray-400"
					title={variation.color.name}
				>
					<div
						className="w-full h-full rounded-full"
						style={{ backgroundColor: variation.color.value }}
					></div>
				</div>
			))
		}
	}

	const renderPrice = () => {
		let prices: number[] = []

		product.variations.map((variation) => prices.push(variation.price))
		prices = prices.sort((a: number, b: number) => a - b)

		if (product.variations.length > 0) {
			return `$${prices[0].toFixed(2)} - $${prices[prices.length - 1].toFixed(
				2
			)}`
		}

		return '$' + product.price.toFixed(2)
	}

	return (
		<div className="w-full mb-10">
			<Link to={`/product/${product.slug}`}>
				<figure className="w-full border-0.5 border-gray-300 mb-4">
					<img
						src={product.image}
						alt={product.name}
						className="w-full aspect-square object-cover"
					/>
				</figure>
			</Link>
			<h1 className="font-bold text-gray-800 cursor-pointer hover:text-black mb-0.5">
				{product.name}
			</h1>
			<h4 className="text-sm font-light text-gray-400 mb-1">
				{product.category}
			</h4>
			<h3 className="text-[15px] font-bold text-gray-500 mb-1">
				{renderPrice()}
			</h3>
			<div className="flex items-center gap-2 mb-2">{renderOptions()}</div>
			<div className="flex items-center -ml-0.5">
				{[1, 2, 3, 4, 5].map((star) => (
					<StarIcon
						key={star}
						className={`w-4 h-4 ${
							product.rating - star > -1 ? 'text-yellow-500' : 'text-gray-300'
						}`}
					/>
				))}
			</div>
		</div>
	)
}

export default ProductCard
