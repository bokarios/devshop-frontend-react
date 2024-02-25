function OurAttributes() {
  const attributes = [
    {
      id: 1,
      title: "worldwide shipping",
      paragraph:
        "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: "globe-free-img.png",
    },
    {
      id: 2,
      title: "best quality",
      paragraph:
        "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: "quality-free-img.png",
    },
    {
      id: 3,
      title: "best offers",
      paragraph:
        "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: "tag-free-img.png",
    },
    {
      id: 4,
      title: "secure payment",
      paragraph:
        "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: "lock-free-img.png",
    },
  ]

  return (
    <div className="w-full bg-gray-50 pb-28">
      <div className="mx-auto w-full max-w-[1440px] px-8 lg:px-32">
        <div className="grid w-full grid-cols-1 justify-evenly gap-3 md:grid-cols-2 lg:grid-cols-4">
          {attributes.map((attr) => (
            <div key={attr.id} className="flex flex-col items-center gap-3 p-2">
              <figure className="mb-1 h-[52px] w-[52px]">
                <img
                  src={`/img/${attr.image}`}
                  alt={attr.image.replace(".png", "")}
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </figure>
              <h5 className="text-lg font-bold capitalize">{attr.title}</h5>
              <p className="text-center font-light leading-loose text-gray-700">
                {attr.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurAttributes
