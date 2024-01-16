function OurAttributes() {
	const attributes = [
		{
			id: 1,
			title: 'worldwide shipping',
			paragraph:
				'It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
			image: 'globe-free-img.png',
		},
		{
			id: 2,
			title: 'best quality',
			paragraph:
				'It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
			image: 'quality-free-img.png',
		},
		{
			id: 3,
			title: 'best offers',
			paragraph:
				'It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
			image: 'tag-free-img.png',
		},
		{
			id: 4,
			title: 'secure payment',
			paragraph:
				'It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
			image: 'lock-free-img.png',
		},
	]

	return (
		<div className="w-full bg-gray-50 pb-28">
			<div className="w-full max-w-[1440px] mx-auto px-32">
				<div className="w-full flex justify-evenly gap-3">
					{attributes.map((attr) => (
						<div key={attr.id} className="flex flex-col items-center gap-3 p-2">
							<figure className="w-[52px] h-[52px] mb-1">
								<img
									src={`/img/${attr.image}`}
									alt={attr.image.replace('.png', '')}
									className="w-100 aspect-square object-cover"
								/>
							</figure>
							<h5 className="text-lg font-bold capitalize">{attr.title}</h5>
							<p className="text-gray-700 text-center font-light leading-loose">
								{attr.paragraph}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default OurAttributes
