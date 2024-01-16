import { useEffect, useState } from 'react'
import ProductsGrid from '../components/ProductsGrid'
import { ProductType } from '../types'
import repositories from '../repositories'
import {
	ChevronDownIcon,
	ChevronRightIcon,
	ChevronUpDownIcon,
} from '@heroicons/react/24/outline'

const StoreView = () => {
	const [products, setProducts] = useState<ProductType[]>([])

	async function getProducts() {
		const res = await repositories.product.allProducts()

		if (res.status === 200) {
			setProducts(res.data.products)
		}
	}

	useEffect(() => {
		getProducts()

		return () => {
			setProducts([])
		}
	}, [])

	return (
		<div className="w-full bg-gray-100">
			<div className="w-full max-w-[1440px] mx-auto lg:px-16 xl:px-0 py-20">
				<div className="flex gap-14">
					<div className="w-[500px]">
						<div className="flex gap-2">
							<input
								type="text"
								className="w-full h-12 px-3 placeholder-gray-500 text-lg focus:outline-[#0084d6]"
								placeholder="Search products..."
							/>
							<button className="flex justify-center items-center w-12 h-12 bg-[#0084d6]">
								<ChevronRightIcon
									strokeWidth={2.5}
									className="w-5 text-white"
								/>
							</button>
						</div>
					</div>
					<div className="w-full bg-white px-28 py-16">
						<div className="flex items-center gap-1 mb-8">
							<h6 className="font-normal text-gray-500">Home</h6>
							<h6 className="font-normal text-gray-500">/</h6>
							<h6 className="font-normal text-gray-500">Store</h6>
						</div>
						<div className="flex justify-between items-center mb-16">
							<h4 className="text-lg font-normal text-gray-800">
								Showing 1-12 of 31 results
							</h4>
							<button className="text-lg font-normal text-gray-500 flex items-center justify-between w-[180px]">
								Default sorting
								<span>
									<ChevronUpDownIcon className="w-5 text-gray-800" />
								</span>
							</button>
						</div>
						<ProductsGrid products={products} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default StoreView
