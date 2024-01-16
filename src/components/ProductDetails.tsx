import { useState } from 'react'
import { VariationType, ProductType } from '../types'
import RelatedProducts from './RelatedProducts'

interface PropsType {
	product: ProductType
}

function ProductDetails({ product }: PropsType) {
	const [activeVariation, setActiveVariation] = useState<VariationType | null>(
		null
	)

	const [activeTab, setActiveTab] = useState<number>(0)

	const clearSelection = () => setActiveVariation(null)

	function changeVariation(option: VariationType) {
		setActiveVariation(option)
	}

	const switchTab = (n: number) => setActiveTab(n)

	const renderVariations = () => {
		if (product.variations?.length > 0) {
			return product.variations.map((variation) => (
				<figure
					key={variation.id}
					className="w-full aspect-square bg-gray-100 cursor-pointer"
					onClick={() => changeVariation(variation)}
				>
					<img
						src={variation.image}
						alt={product?.name}
						className={`w-full h-full ${
							variation.id === activeVariation?.id
								? 'opacity-100'
								: 'opacity-30'
						} hover:opacity-100`}
					/>
				</figure>
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

	const renderColors = () => {
		let colors: string[] = []

		product.variations.map((variation) => colors.push(variation.color.name))

		return colors.toString().replaceAll(',', ', ')
	}

	const renderClearSelection = () => {
		if (activeVariation) {
			return (
				<button
					className="capitalize text-sm font-normal text-gray-500 mt-4"
					onClick={clearSelection}
				>
					clear selection
				</button>
			)
		}
	}

	return (
		<>
			<div className="flex gap-16">
				<div className="w-1/2">
					<div className="w-full aspect-square bg-gray-100 overflow-hidden mb-5">
						<img
							src={activeVariation?.image || product.image}
							alt={product.name}
							className="w-full transition-transform duration-300 ease hover:scale-[1.2]"
						/>
					</div>
					<div className="flex justify-evenly gap-4 w-full">
						{renderVariations()}
					</div>
				</div>
				<div className="w-1/2 p-2">
					<div className="flex gap-2 text-gray-400 text-lg mb-6">
						<h5>Home</h5>
						<h5>/</h5>
						<h5>{product?.category}</h5>
					</div>
					<h1 className="text-4xl text-gray-700 mb-6">{product?.name}</h1>
					<p className="text-gray-500 font-normal mb-5">{product.shortDesc}</p>
					<h2 className="text-2xl font-bold text-gray-900 mb-6">
						{renderPrice()}
					</h2>
					<div className="flex gap-4">
						{product?.variations?.map((variation) => (
							<div
								key={variation.id}
								className={`w-10 h-10 bg-white rounded-full p-0.5 border transition-all duration-300 ease cursor-pointer ${
									variation.id === activeVariation?.id
										? 'border-gray-400'
										: 'border-transparent'
								} hover:border-gray-400`}
								onClick={() => changeVariation(variation)}
							>
								<div
									className="w-full h-full rounded-full"
									style={{ backgroundColor: variation.color.value }}
								></div>
							</div>
						))}
					</div>
					{renderClearSelection()}
					<hr className="bg-gray-400 mt-8 mb-4" />
					<h3 className="text-lg font-bold mb-6">
						{activeVariation ? '$' + activeVariation.price.toFixed(2) : ''}
					</h3>
					<div className="flex gap-5">
						<input
							type="number"
							min={1}
							max={10}
							defaultValue={1}
							className="w-16 h-12 pl-6 focus:outline-none"
						/>
						<button
							className="px-10 h-12 w-full uppercase text-white text-sm font-bold bg-[#0084d6] transition-colors duration-300 ease hover:bg-[#0075be] disabled:opacity-40 disabled:cursor-not-allowed"
							disabled={activeVariation ? false : true}
						>
							add to cart
						</button>
					</div>
					<hr className="bg-gray-400 my-8" />
				</div>
			</div>
			<div>
				<hr className="mt-16" />
				<div className="flex gap-4">
					<h6
						className={`font-semibold text-gray-500 pt-2 border-t-[3px] cursor-pointer  ${
							activeTab === 0 ? 'border-t-gray-700' : 'border-t-transparent'
						}`}
						onClick={() => switchTab(0)}
					>
						Description
					</h6>
					<h6
						className={`font-semibold text-gray-500 pt-2 border-t-[3px] cursor-pointer  ${
							activeTab === 1 ? 'border-t-gray-700' : 'border-t-transparent'
						} ${product.variations.length > 0 ? 'inline' : 'hidden'}`}
						onClick={() => switchTab(1)}
					>
						Additional Information
					</h6>
					<h6
						className={`font-semibold text-gray-500 pt-2 border-t-[3px] cursor-pointer  ${
							activeTab === 2 ? 'border-t-gray-700' : 'border-t-transparent'
						}`}
						onClick={() => switchTab(2)}
					>
						Reviews (0)
					</h6>
				</div>
				<div className="mt-8">
					<div className={`${activeTab === 0 ? 'block' : 'hidden'}`}>
						<h4 className="text-xl font-bold text-gray-800 mb-4">
							Product description
						</h4>
						<p className="font-normal text-gray-600">{product.desc}</p>
					</div>
					<div className={`${activeTab === 1 ? 'block' : 'hidden'}`}>
						<div className="flex items-center border">
							<div className="font-normal text-gray-600 capitalize px-4 py-3 w-2/12">
								color
							</div>
							<div className="w-auto border-l px-4 py-3">{renderColors()}</div>
						</div>
					</div>
					<div className={`${activeTab === 2 ? 'block' : 'hidden'}`}>
						<h5 className="font-normal text-gray-600 mb-5">
							There are no reviews yet.
						</h5>
						<div className="w-full border border-gray-200 rounded-sm p-6">
							<h3 className="text-lg font-normal text-gray-800 mb-1">
								Be the first to review "{product.name}"
							</h3>
							<p className="text-gray-600 text-sm mb-5">
								Your email address will not be published. Required fields are
								marked *
							</p>
							<div className="flex items-center mb-4">
								<h6 className="text-gray-800 text-lg">Your rating *</h6>
							</div>
							<div className="mb-4">
								<h6 className="text-gray-800 text-lg mb-1">Your review *</h6>
								<textarea
									rows={3}
									className="w-full resize-none bg-white border border-gray-200 rounded-sm p-4 focus:outline-none"
								></textarea>
							</div>
							<div className="flex gap-5 mb-4">
								<div className="w-1/2">
									<h6 className="text-gray-800 text-lg mb-1">Name *</h6>
									<input
										type="text"
										className="bg-white border border-gray-200 rounded-sm w-full h-10 px-4 focus:outline-none"
									/>
								</div>
								<div className="w-1/2">
									<h6 className="text-gray-800 text-lg mb-1">Email *</h6>
									<input
										type="email"
										className="bg-white border border-gray-200 rounded-sm w-full h-10 px-4 focus:outline-none"
									/>
								</div>
							</div>
							<button className="px-6 h-10 uppercase text-white text-sm font-bold bg-[#0084d6] transition-colors duration-300 ease hover:bg-[#0075be]">
								post
							</button>
						</div>
					</div>
				</div>
				<RelatedProducts />
			</div>
		</>
	)
}

export default ProductDetails
