import ProductCard from "./ProductCard"
import { useEffect, useState } from "react"
import repositories from "../repositories"
import { ProductType } from "../types"

const FeaturedProducts = () => {
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
    <div className="w-full pb-24 pt-28">
      <div className="mb-14 flex w-full justify-center">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-3xl font-semibold capitalize text-black md:text-[42px]">
            featured products
          </h1>
          <div className="h-[2px] w-[100px] rounded-full bg-blue-500"></div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[1440px] px-16">
        <div className="grid-col-1 grid w-full gap-5 md:grid-cols-3 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts
