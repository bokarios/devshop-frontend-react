import { useState } from "react"
import { ProductType } from "../types"
import RelatedProducts from "./RelatedProducts"
import ButtonComponent from "./ButtonComponent"

interface PropsType {
  product: ProductType
}

function ProductDetails({ product }: PropsType) {
  const [activeTab, setActiveTab] = useState<number>(0)

  const switchTab = (n: number) => setActiveTab(n)

  return (
    <>
      <div className="mx-auto w-full max-w-[1440px] px-28 pb-20 pt-16">
        <div className="flex gap-16">
          <div className="w-1/2">
            <div className="mb-5 flex aspect-square w-full items-start justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="ease w-[60%] object-contain brightness-[98%] transition-transform duration-300 hover:scale-[1.2]"
              />
            </div>
          </div>
          <div className="w-1/2 p-2">
            <div className="mb-6 flex gap-2 text-lg text-gray-400">
              <h5>Home</h5>
              <h5>/</h5>
              <h5>{product?.category}</h5>
            </div>
            <h1 className="mb-6 text-4xl text-gray-700">{product?.title}</h1>
            <p className="mb-5 font-normal text-gray-500">
              {product.description.slice(0, 40)}
            </p>
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </h2>
            <hr className="mb-4 mt-8 bg-gray-400" />
            <div className="flex gap-5">
              <input
                type="number"
                min={1}
                max={10}
                defaultValue={1}
                className="h-12 w-16 pl-6 focus:outline-none"
              />
              <ButtonComponent
                text="add to cart"
                textClass="text-sm font-bold text-white"
                colorClass="bg-brand-blue hover:bg-brand-dark-blue"
                size="h-12 w-fit"
                action={() => alert("Added to cart")}
              />
            </div>
            <hr className="my-8 bg-gray-400" />
          </div>
        </div>
        <div>
          <hr className="mt-16" />
          <div className="flex gap-4">
            <h6
              className={`cursor-pointer border-t-[3px] pt-2 font-semibold text-gray-500  ${
                activeTab === 0 ? "border-t-gray-700" : "border-t-transparent"
              }`}
              onClick={() => switchTab(0)}
            >
              Description
            </h6>
            <h6
              className={`cursor-pointer border-t-[3px] pt-2 font-semibold text-gray-500  ${
                activeTab === 2 ? "border-t-gray-700" : "border-t-transparent"
              }`}
              onClick={() => switchTab(2)}
            >
              Reviews (0)
            </h6>
          </div>
          <div className="mt-8">
            <div className={`${activeTab === 0 ? "block" : "hidden"}`}>
              <h4 className="mb-4 text-xl font-bold text-gray-800">
                Product description
              </h4>
              <p className="font-normal text-gray-600">{product.description}</p>
            </div>
            <div className={`${activeTab === 2 ? "block" : "hidden"}`}>
              <h5 className="mb-5 font-normal text-gray-600">
                There are no reviews yet.
              </h5>
              <div className="w-full rounded-sm border border-gray-200 p-6">
                <h3 className="mb-1 text-lg font-normal text-gray-800">
                  Be the first to review "{product.title}"
                </h3>
                <p className="mb-5 text-sm text-gray-600">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <div className="mb-4 flex items-center">
                  <h6 className="text-lg text-gray-800">Your rating *</h6>
                </div>
                <div className="mb-4">
                  <h6 className="mb-1 text-lg text-gray-800">Your review *</h6>
                  <textarea
                    rows={3}
                    className="w-full resize-none rounded-sm border border-gray-200 bg-white p-4 focus:outline-none"
                  ></textarea>
                </div>
                <div className="mb-4 flex gap-5">
                  <div className="w-1/2">
                    <h6 className="mb-1 text-lg text-gray-800">Name *</h6>
                    <input
                      type="text"
                      className="h-10 w-full rounded-sm border border-gray-200 bg-white px-4 focus:outline-none"
                    />
                  </div>
                  <div className="w-1/2">
                    <h6 className="mb-1 text-lg text-gray-800">Email *</h6>
                    <input
                      type="email"
                      className="h-10 w-full rounded-sm border border-gray-200 bg-white px-4 focus:outline-none"
                    />
                  </div>
                </div>
                <button className="ease h-10 bg-[#0084d6] px-6 text-sm font-bold uppercase text-white transition-colors duration-300 hover:bg-[#0075be]">
                  post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-28 pb-20 pt-8">
          <RelatedProducts />
        </div>
      </div>
    </>
  )
}

export default ProductDetails
