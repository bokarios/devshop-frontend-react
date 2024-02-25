import { useEffect, useState } from "react"
import ProductsGrid from "../components/ProductsGrid"
import { ProductType } from "../types"
import repositories from "../repositories"
import {
  ChevronRightIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline"
// import PriceFilter from "../components/PriceFilter"
import ListComponent from "../components/ListComponent"

const WomenView = () => {
  const [products, setProducts] = useState<ProductType[]>([])
  const currentPage = 1
  const perPage = 6
  const [sort, setSort] = useState("new first")
  const [sortDropdown, setSortDropdown] = useState(false)

  const categories = [
    { id: 1, name: "Electronics", productsCount: 6 },
    { id: 2, name: "Men's Clothing", productsCount: 4 },
    { id: 3, name: "Women's Clothing", productsCount: 6 },
    { id: 4, name: "Jewelery", productsCount: 4 },
  ]

  async function getProducts() {
    const res = await repositories.product.categoryProducts(
      sort,
      "women's clothing",
    )

    if (res.status === 200) {
      setProducts(res.data)
    }
  }

  // const paginate = (num: number) => {
  //   setCurrentPage(num)
  // }

  // const prevPage = () => {
  //   if (currentPage !== 1) {
  //     setCurrentPage(currentPage - 1)
  //   }
  // }
  // const nextPage = () => {
  //   if (currentPage !== Math.ceil(products.length / perPage)) {
  //     setCurrentPage(currentPage + 1)
  //   }
  // }

  const toggleSort = () => {
    setSortDropdown(!sortDropdown)
  }

  useEffect(() => {
    getProducts()

    return () => {
      setProducts([])
    }
  }, [])

  const indexOfLastProduct = currentPage * perPage
  const indexOfFirstProduct = indexOfLastProduct - perPage
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  )

  return (
    <div className="w-full bg-gray-100">
      <div className="mx-auto w-full max-w-[1440px] px-8 py-20 md:px-16">
        <div className="flex flex-col gap-14 md:flex-row">
          <div className="w-full md:w-[375px]">
            <div className="mb-10 flex gap-2">
              <input
                type="text"
                className="h-12 w-full px-3 text-lg placeholder-gray-500 focus:outline-[#0084d6]"
                placeholder="Search products..."
              />
              <button className="flex h-12 w-12 items-center justify-center bg-[#0084d6]">
                <ChevronRightIcon
                  strokeWidth={2.5}
                  className="w-5 text-white"
                />
              </button>
            </div>
            {/* <div className="mb-12">
							<PriceFilter />
						</div> */}
            <ListComponent title="Categories" items={categories} />
          </div>
          <div className="w-full bg-white px-8 py-6 md:px-28 md:py-16">
            <div className="mb-8 flex items-center gap-1">
              <h6 className="font-normal text-gray-500">Home</h6>
              <h6 className="font-normal text-gray-500">/</h6>
              <h6 className="font-normal text-gray-500">Women's Clothing</h6>
            </div>
            <div className="mb-16 flex items-center justify-between">
              <h4 className="text-lg font-normal text-gray-800">
                {`${indexOfFirstProduct + 1} to ${
                  indexOfLastProduct > products.length
                    ? products.length
                    : indexOfLastProduct
                } of ${products.length}`}
              </h4>
              <button
                className="relative flex w-[140px] items-center justify-between text-lg font-normal capitalize text-gray-500"
                onClick={toggleSort}
              >
                {sort}
                <span>
                  <ChevronUpDownIcon className="w-5 text-gray-800" />
                </span>
                <div
                  className={`ease absolute bottom-[-100px] left-0 w-[130px] transition-all duration-300 ${
                    sortDropdown ? "block" : "hidden"
                  } z-10 rounded-b border border-t-0 border-gray-200 bg-white`}
                >
                  <div className="flex w-full flex-col items-start">
                    <div
                      className="w-full cursor-pointer px-4 py-2 text-left capitalize hover:bg-gray-50"
                      onClick={() => setSort("new first")}
                    >
                      new first
                    </div>
                    <div
                      className="w-full cursor-pointer px-4 py-2 text-left capitalize hover:bg-gray-50"
                      onClick={() => setSort("old first")}
                    >
                      old first
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <ProductsGrid products={currentProducts} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WomenView
