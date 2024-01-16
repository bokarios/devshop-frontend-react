import DevLogo from './DevLogo'

function FooterComponent() {
	return (
		<div className="w-full pt-24 pb-16 border-t border-gray-200">
			<div className="w-full max-w-[1440px] mx-auto px-28">
				<div className="flex">
					<div className="w-[40%]">
						<div className="w-20 mb-5">
							<DevLogo dark={true} />
						</div>
						<h4 className="text-xl text-gray-600 font-bold">
							The best look anytime, anywhere.
						</h4>
					</div>
					<div className="w-[20%] pt-4">
						<h3 className="text-xl font-normal capitalize mb-5">for her</h3>
						<div className="w-full flex flex-col gap-2">
							<a
								href="#!"
								className="font-light text-gray-400 w-fit transition-colors duration-300 ease hover:text-[#0075be]"
							>
								Women Jeans
							</a>
							<a
								href="#!"
								className="font-light text-gray-400 w-fit transition-colors duration-300 ease hover:text-[#0075be]"
							>
								Tops and Shirts
							</a>
							<a
								href="#!"
								className="font-light text-gray-400 w-fit transition-colors duration-300 ease hover:text-[#0075be]"
							>
								Women Jackets
							</a>
							<a
								href="#!"
								className="font-light text-gray-400 w-fit transition-colors duration-300 ease hover:text-[#0075be]"
							>
								Heels and Flats
							</a>
							<a
								href="#!"
								className="font-light text-gray-400 w-fit transition-colors duration-300 ease hover:text-[#0075be]"
							>
								Women Accessories
							</a>
						</div>
					</div>
					<div className="w-[20%] pt-4">
						<h3 className="text-xl font-normal capitalize mb-5">for him</h3>
						<div className="w-full flex flex-col gap-2">
							<a
								href="#!"
								className="font-light text-gray-400 w-fit transition-colors duration-300 ease hover:text-[#0075be]"
							>
								Men Jeans
							</a>
							<a
								href="#!"
								className="font-light text-gray-400 w-fit transition-colors duration-300 ease hover:text-[#0075be]"
							>
								Men Shirts
							</a>
							<a
								href="#!"
								className="font-light text-gray-400 w-fit transition-colors duration-300 ease hover:text-[#0075be]"
							>
								Men Shoes
							</a>
							<a
								href="#!"
								className="font-light text-gray-400 w-fit transition-colors duration-300 ease hover:text-[#0075be]"
							>
								Men Accessories
							</a>
							<a
								href="#!"
								className="font-light text-gray-400 w-fit transition-colors duration-300 ease hover:text-[#0075be]"
							>
								Men Jackets
							</a>
						</div>
					</div>
					<div className="w-[20%] pt-4">
						<h3 className="text-xl font-normal capitalize mb-5">subscribe</h3>
						<input
							type="email"
							placeholder="Your email address..."
							className="w-full h-12 border border-gray-200 px-4 placeholder-gray-500 mb-5 focus:outline-none focus:border-transparent"
						/>
						<button className="px-8 h-12 w-full uppercase text-white text-sm font-bold bg-[#0084d6] transition-colors duration-300 ease hover:bg-[#0075be]">
							subscribe
						</button>
					</div>
				</div>
			</div>
			<hr className="bg-gray-200 mt-24 mb-5" />
			<div className="w-full max-w-[1440px] mx-auto px-28">
				<div className="flex justify-between items-center">
					<h5 className="text-gray-700 font-light">
						Copyright © 2023 - {new Date().getUTCFullYear()} DevShop. Powered by
						<a
							href="https://github.com/bokarios"
							target="_blank"
							rel="noopener noreferrer"
							className="font-normal text-gray-600 ml-1"
						>
							Bokarios
						</a>
						.
					</h5>
				</div>
			</div>
		</div>
	)
}

export default FooterComponent
