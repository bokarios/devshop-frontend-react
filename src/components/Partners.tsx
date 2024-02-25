function Partners() {
  const logos = [
    { id: 1, link: "/partners/logoipsum-330.svg" },
    { id: 2, link: "/partners/logoipsum-325.svg" },
    { id: 3, link: "/partners/logoipsum-311.svg" },
    { id: 4, link: "/partners/logoipsum-297.svg" },
    { id: 5, link: "/partners/logoipsum-330.svg" },
  ]

  return (
    <div className="my-20 hidden w-full md:block">
      <div className="flex items-center justify-between">
        {logos.map((logo) => (
          <div key={logo.id} className="w-[100px] lg:w-[150px]">
            <img src={logo.link} alt={logo.id.toString()} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Partners
