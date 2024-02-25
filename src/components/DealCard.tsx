interface DealType {
  id: number
  title: string
  description: string
  image: string
}

interface PropsType {
  deal: DealType
}

function DealCard(props: PropsType) {
  return (
    <div className="relative h-[460px] w-full bg-pink-200">
      <img
        src={props.deal.image}
        alt={props.deal.title}
        className="absolute left-0 top-0 z-10 h-full w-full object-cover object-center"
      />
      <div className="absolute left-0 top-0 z-20 h-full w-full bg-black opacity-50"></div>
      <div className="relative z-30 flex h-full w-full items-end p-10">
        <div className="w-full">
          <h1 className="mb-3 text-2xl font-bold capitalize text-white">
            {props.deal.title}
          </h1>
          <p className="mb-6 font-normal leading-relaxed text-white">
            {props.deal.description}
          </p>
          <button className="bg-white px-7 py-3 text-sm font-medium uppercase md:text-[16px]">
            shop now
          </button>
        </div>
      </div>
    </div>
  )
}

export default DealCard
