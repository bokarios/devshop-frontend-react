import { useEffect, useState } from 'react'
import { ProductType } from '../types'
import repositories from '../repositories'
import ProductCard from './ProductCard'

const RelatedProducts = () => {
	const [products, setProducts] = useState<ProductType[]>([])

	async function getFeatured() {
		const res = await repositories.product.featuredAPi()

		if (res.status === 200) {
			setProducts(res.data.products)
		}
	}

	useEffect(() => {
		getFeatured()

		return () => {
			setProducts([])
		}
	}, [])

	return (
		<div className="mt-20">
			<h1 className="text-4xl font-bold text-gray-800 mb-8">
				Related Products
			</h1>
			<div className="w-full grid grid-cols-5 gap-5">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	)
}

export default RelatedProducts
