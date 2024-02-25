import { useEffect, useState } from "react"
import { ProductType } from "../types"
import repositories from "../repositories"
import ProductCard from "./ProductCard"

const RelatedProducts = () => {
  const [products, setProducts] = useState<ProductType[]>([])

  async function getFeatured() {
    const res = await repositories.product.featuredAPi()

    if (res.status === 200) {
      setProducts(res.data)
    }
  }

  useEffect(() => {
    getFeatured()

    return () => {
      setProducts([])
    }
  }, [])

  return (
    <div className="mt-20">
      <h1 className="mb-8 text-3xl font-bold text-gray-800 md:text-4xl">
        Related Products
      </h1>
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts
