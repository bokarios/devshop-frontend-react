import { useState } from 'react'
import { ProductType } from '../types'
import RelatedProducts from './RelatedProducts'
import ButtonComponent from './ButtonComponent'

interface PropsType {
	product: ProductType
}

function ProductDetails({ product }: PropsType) {
	const [activeTab, setActiveTab] = useState<number>(0)

	const switchTab = (n: number) => setActiveTab(n)

	return (
		<>
			<div className="w-full max-w-[1440px] mx-auto px-28 pt-16 pb-20">
				<div className="flex gap-16">
					<div className="w-1/2">
						<div className="flex justify-center items-start w-full aspect-square overflow-hidden mb-5">
							<img
								src={product.image}
								alt={product.title}
								className="w-[60%] object-contain brightness-[98%] transition-transform duration-300 ease hover:scale-[1.2]"
							/>
						</div>
					</div>
					<div className="w-1/2 p-2">
						<div className="flex gap-2 text-gray-400 text-lg mb-6">
							<h5>Home</h5>
							<h5>/</h5>
							<h5>{product?.category}</h5>
						</div>
						<h1 className="text-4xl text-gray-700 mb-6">{product?.title}</h1>
						<p className="text-gray-500 font-normal mb-5">
							{product.description.slice(0, 40)}
						</p>
						<h2 className="text-2xl font-bold text-gray-900 mb-6">
							${product.price.toFixed(2)}
						</h2>
						<hr className="bg-gray-400 mt-8 mb-4" />
						<div className="flex gap-5">
							<input
								type="number"
								min={1}
								max={10}
								defaultValue={1}
								className="w-16 h-12 pl-6 focus:outline-none"
							/>
							<ButtonComponent
								text="add to cart"
								textClass="text-sm font-bold text-white"
								colorClass="bg-brand-blue hover:bg-brand-dark-blue"
								size="h-12 w-fit"
								type="default"
								action={() => alert('Added to cart')}
							/>
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
							<p className="font-normal text-gray-600">{product.description}</p>
						</div>
						<div className={`${activeTab === 2 ? 'block' : 'hidden'}`}>
							<h5 className="font-normal text-gray-600 mb-5">
								There are no reviews yet.
							</h5>
							<div className="w-full border border-gray-200 rounded-sm p-6">
								<h3 className="text-lg font-normal text-gray-800 mb-1">
									Be the first to review "{product.title}"
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
				</div>
			</div>
			<div className="w-full bg-white">
				<div className="w-full max-w-[1440px] mx-auto px-28 pt-8 pb-20">
					<RelatedProducts />
				</div>
			</div>
		</>
	)
}

export default ProductDetails
