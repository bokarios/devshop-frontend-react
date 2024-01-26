interface PropsType {
	title: string
	items: ItemType[]
}

interface ItemType {
	id: number
	name: string
	productsCount: number
}

const ListComponent = ({ title, items }: PropsType) => {
	return (
		<>
			<h4 className="text-xl font-normal text-black mb-6">{title}</h4>
			<div className="flex flex-col gap-3">
				{items.map((item) => (
					<div className="flex justify-between items-center" key={item.id}>
						<h6 className="text-sm font-normal text-black">{item.name}</h6>
						<h6 className="text-sm font-normal text-black">
							({item.productsCount})
						</h6>
					</div>
				))}
			</div>
		</>
	)
}

export default ListComponent
