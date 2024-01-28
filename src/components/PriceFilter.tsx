const PriceFilter = () => {
	return (
		<>
			<h4 className="text-xl text-black mb-2">Filter by Price</h4>
			<input type="range" min={0} max={250} className="w-full mb-2" />
			<div className="flex justify-between items-center">
				<button className="uppercase h-8 px-4 text-xs text-gray-50 bg-brand-blue">
					filter
				</button>
				<small className="text-sm font-light">
					Price: <span className="font-semibold">$20</span> -{' '}
					<span className="font-semibold">$250</span>
				</small>
			</div>
		</>
	)
}

export default PriceFilter
