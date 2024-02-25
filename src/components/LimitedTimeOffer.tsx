function LimitedTimeOffer() {
  return (
    <div className="w-full bg-gray-50 pb-28">
      <div className="mx-auto w-full max-w-[1440px] px-8">
        <div className="limited-offer relative h-fit w-full bg-gray-300">
          <div className="limited-offer-overlay absolute left-0 top-0 h-full w-full"></div>
          <div className="relative h-full w-full p-10 md:p-24">
            <h2 className="mb-3 text-lg font-bold capitalize text-white md:text-xl">
              limited time offer
            </h2>
            <h1 className="mb-2 text-3xl font-semibold capitalize text-white md:text-[42px]">
              Special Edition
            </h1>
            <p className="mb-4 w-full font-light leading-loose text-white md:w-1/2">
              The winter is cold, be the first to buy this winter set.
            </p>
            <h3 className="mb-9 text-lg font-bold text-white">
              Buy This set At 20% Discount, Use The Code WS2024
            </h3>
            <button className="bg-white px-7 py-3 text-sm font-bold uppercase text-gray-600 md:text-[16px]">
              shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LimitedTimeOffer
