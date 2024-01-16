function LimitedTimeOffer() {
	return (
		<div className="w-full bg-gray-50 pb-28">
			<div className="w-full max-w-[1440px] mx-auto px-8">
				<div className="w-full h-[500px] bg-gray-300 limited-offer relative">
					<div className="limited-offer-overlay absolute top-0 left-0 w-full h-full"></div>
					<div className="w-full h-full p-24 relative">
						<h2 className="text-xl text-white font-bold capitalize mb-3">
							limited time offer
						</h2>
						<h1 className="text-[42px] text-white font-semibold capitalize mb-2">
							Special Edition
						</h1>
						<p className="text-white font-light w-1/2 leading-loose mb-4">
							The winter is cold, be the first to buy this winter set.
						</p>
						<h3 className="text-lg text-white font-bold mb-9">
							Buy This set At 20% Discount, Use The Code WS2024
						</h3>
						<button className="px-7 py-3 uppercase text-sm text-gray-600 font-bold bg-white">
							shop now
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LimitedTimeOffer
