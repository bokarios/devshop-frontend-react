export interface VariationType {
	id: number
	color: { name: string; value: string }
	price: number
	image: string
}

export interface ProductType {
	id: number
	name: string
	slug: string
	shortDesc: string | null
	desc: string | null
	category: string
	image: string
	price: number
	discount: number
	rating: number
	variations: [] | VariationType[]
}
