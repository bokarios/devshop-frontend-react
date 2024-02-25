import DevLogo from "./DevLogo"

function FooterComponent() {
  return (
    <div className="w-full border-t border-gray-200 pb-16 pt-24">
      <div className="mx-auto w-full max-w-[1440px] px-8 lg:px-28">
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="w-full lg:w-[40%]">
            <div className="mb-5 w-20">
              <DevLogo dark={true} />
            </div>
            <h4 className="text-xl font-bold text-gray-600">
              The best look anytime, anywhere.
            </h4>
          </div>
          <div className="flex w-full flex-col md:flex-row">
            <div className="w-full pt-4 md:w-1/3">
              <h3 className="mb-5 text-xl font-normal capitalize">for her</h3>
              <div className="flex w-full flex-col gap-2">
                <a
                  href="#!"
                  className="ease w-fit font-light text-gray-400 transition-colors duration-300 hover:text-[#0075be]"
                >
                  Women Jeans
                </a>
                <a
                  href="#!"
                  className="ease w-fit font-light text-gray-400 transition-colors duration-300 hover:text-[#0075be]"
                >
                  Tops and Shirts
                </a>
                <a
                  href="#!"
                  className="ease w-fit font-light text-gray-400 transition-colors duration-300 hover:text-[#0075be]"
                >
                  Women Jackets
                </a>
                <a
                  href="#!"
                  className="ease w-fit font-light text-gray-400 transition-colors duration-300 hover:text-[#0075be]"
                >
                  Heels and Flats
                </a>
                <a
                  href="#!"
                  className="ease w-fit font-light text-gray-400 transition-colors duration-300 hover:text-[#0075be]"
                >
                  Women Accessories
                </a>
              </div>
            </div>
            <div className="w-full pt-4 md:w-1/3">
              <h3 className="mb-5 text-xl font-normal capitalize">for him</h3>
              <div className="flex w-full flex-col gap-2">
                <a
                  href="#!"
                  className="ease w-fit font-light text-gray-400 transition-colors duration-300 hover:text-[#0075be]"
                >
                  Men Jeans
                </a>
                <a
                  href="#!"
                  className="ease w-fit font-light text-gray-400 transition-colors duration-300 hover:text-[#0075be]"
                >
                  Men Shirts
                </a>
                <a
                  href="#!"
                  className="ease w-fit font-light text-gray-400 transition-colors duration-300 hover:text-[#0075be]"
                >
                  Men Shoes
                </a>
                <a
                  href="#!"
                  className="ease w-fit font-light text-gray-400 transition-colors duration-300 hover:text-[#0075be]"
                >
                  Men Accessories
                </a>
                <a
                  href="#!"
                  className="ease w-fit font-light text-gray-400 transition-colors duration-300 hover:text-[#0075be]"
                >
                  Men Jackets
                </a>
              </div>
            </div>
            <div className="w-full pt-4 md:w-1/3">
              <h3 className="mb-5 text-xl font-normal capitalize">subscribe</h3>
              <input
                type="email"
                placeholder="Your email address..."
                className="mb-5 h-12 w-full border border-gray-200 px-4 placeholder-gray-500 focus:border-transparent focus:outline-none"
              />
              <button className="ease h-12 w-full bg-[#0084d6] px-8 text-sm font-bold uppercase text-white transition-colors duration-300 hover:bg-[#0075be]">
                subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="mb-5 mt-24 bg-gray-200" />
      <div className="mx-auto w-full max-w-[1440px] px-8 md:px-28">
        <div className="flex items-center justify-center text-center lg:text-left">
          <h5 className="font-light text-gray-700">
            Copyright © 2023 - {new Date().getUTCFullYear()} DevShop. Powered
            by
            <a
              href="https://github.com/bokarios"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 font-normal text-gray-600"
            >
              Bokarios
            </a>
            .
          </h5>
        </div>
      </div>
    </div>
  )
}

export default FooterComponent
