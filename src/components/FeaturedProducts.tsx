import ProductCard from './ProductCard'
// import featured from '../featured'
import { useEffect, useState } from 'react'
import repositories from '../repositories'
import { ProductType } from '../types'

const FeaturedProducts = () => {
	const [products, setProducts] = useState<ProductType[]>([])

	async function getFeatured() {
		const res = await repositories.product.featuredAPi()

		if (res.status === 200) {
			setProducts(res.data)
		}
	}

	useEffect(() => {
		getFeatured()

		return () => {
			setProducts([])
		}
	}, [])

	return (
		<div className="w-full pt-28 pb-24">
			<div className="w-full flex justify-center mb-14">
				<div className="flex flex-col items-center gap-5">
					<h1 className="text-[42px] font-semibold capitalize text-black">
						featured products
					</h1>
					<div className="w-[100px] h-[2px] bg-blue-500 rounded-full"></div>
				</div>
			</div>
			<div className="w-full max-w-[1440px] mx-auto px-16">
				<div className="w-full grid grid-cols-5 gap-5">
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</div>
	)
}

export default FeaturedProducts
