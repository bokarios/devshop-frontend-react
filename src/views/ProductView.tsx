import { useEffect, useState } from 'react'
import ProductDetails from '../components/ProductDetails'
import { useParams } from 'react-router-dom'
import repositories from '../repositories'
import { ProductType } from '../types'

function ProductView() {
	const [product, setProduct] = useState<ProductType | null>(null)
	const { slug } = useParams()
	const productId = Number(slug?.split('-')[0])

	async function getProduct(id: number) {
		const res = await repositories.product.oneProduct(id)

		if (res.status === 200) {
			setProduct(res.data)
		}
	}

	useEffect(() => {
		getProduct(productId)

		return () => {
			setProduct(null)
		}
	}, [productId])

	function renderDetails() {
		if (product) {
			return <ProductDetails product={product} />
		}
	}

	return <div className="w-full bg-gray-50">{renderDetails()}</div>
}

export default ProductView
