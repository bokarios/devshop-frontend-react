function HomeHero() {
	return (
		<div className="w-full h-[92vh] bg-gray-500 relative hero">
			<div className="w-full h-full absolute top-0 left-0 z-20 bg-blue-500 opacity-40 hero-overlay"></div>
			<div className="w-full max-w-[1440px] h-full mx-auto flex items-center px-32 relative z-30">
				<div>
					<h1 className="text-[66px] text-white font-semibold capitalize leading-[1.20] mb-7">
						Fashion wonders for <br /> cold winter!
					</h1>
					<h2 className="text-[26px] text-white font-medium capitalize mb-10">
						25% off on all winter products
					</h2>
					<div className="flex items-center gap-5">
						<button className="uppercase font-medium px-7 py-3 bg-gray-50">
							shop now
						</button>
						<button className="uppercase font-medium text-gray-50 border border-gray-50 px-6 py-3 bg-transparent">
							find more
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeHero
