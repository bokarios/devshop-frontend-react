interface DealType {
	id: number
	title: string
	description: string
	image: string
}

interface PropsType {
	deal: DealType
}

function DealCard(props: PropsType) {
	return (
		<div className="w-full h-[460px] bg-pink-200 relative">
			<img
				src={props.deal.image}
				alt={props.deal.title}
				className="absolute top-0 left-0 w-full h-full object-center object-cover z-10"
			/>
			<div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-20"></div>
			<div className="flex items-end w-full h-full p-10 relative z-30">
				<div className="w-full">
					<h1 className="text-2xl text-white font-bold capitalize mb-3">
						{props.deal.title}
					</h1>
					<p className="text-white font-normal leading-relaxed mb-6">
						{props.deal.description}
					</p>
					<button className="px-7 py-3 uppercase font-medium bg-white">
						shop now
					</button>
				</div>
			</div>
		</div>
	)
}

export default DealCard
