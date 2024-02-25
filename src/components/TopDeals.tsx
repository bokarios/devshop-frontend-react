import DealCard from "./DealCard"
import Partners from "./Partners"

function TopDeals() {
  const deals = [
    {
      id: 1,
      title: "20% off on tank tops",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porin ac dictum.",
      image: "/img/women-fashion-free-img.jpg",
    },
    {
      id: 2,
      title: "sunglasses for you",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porin ac dictum.",
      image: "/img/men-fashion-free-img.jpg",
    },
    {
      id: 3,
      title: "let's lorem suit up!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porin ac dictum.",
      image: "/img/footwear-free-img.jpg",
    },
  ]

  return (
    <div className="mx-auto w-full max-w-[1440px] px-8 lg:px-32">
      <Partners />
      <div className="mb-32 mt-24 w-full md:mt-0">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {deals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopDeals
