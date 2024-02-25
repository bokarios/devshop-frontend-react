function HomeHero() {
  return (
    <div className="hero relative h-[88vh] w-full bg-gray-500 md:h-[92vh]">
      <div className="hero-overlay absolute left-0 top-0 z-20 h-full w-full bg-blue-500 opacity-40"></div>
      <div className="relative z-30 mx-auto flex h-full w-full max-w-[1440px] items-center px-8 lg:px-32">
        <div>
          <h1 className="mb-7 text-4xl font-semibold capitalize leading-[1.20] text-white md:text-[66px]">
            Fashion wonders for <br /> cold winter!
          </h1>
          <h2 className="mb-10 text-xl font-medium capitalize text-white md:text-[26px]">
            25% off on all winter products
          </h2>
          <div className="flex items-center gap-5">
            <button className="bg-gray-50 px-7 py-3 text-sm font-medium uppercase md:text-[16px]">
              shop now
            </button>
            <button className="border border-gray-50 bg-transparent px-6 py-3 text-sm font-medium uppercase text-gray-50 md:text-[16px]">
              find more
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHero
