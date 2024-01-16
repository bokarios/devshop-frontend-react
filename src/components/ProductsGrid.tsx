import { ProductType } from '../types'
import ProductCard from './ProductCard'

interface PropsType {
	products: ProductType[]
}

const ProductsGrid = ({ products }: PropsType) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	)
}

export default ProductsGrid
