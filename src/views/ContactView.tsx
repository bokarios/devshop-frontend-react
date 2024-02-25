import ButtonComponent from "../components/ButtonComponent"

const ContactView = () => {
  return (
    <>
      <div className="contact relative h-[60vh] w-full bg-gray-500">
        <div className="hero-overlay absolute left-0 top-0 z-20 h-full w-full bg-blue-500 opacity-40"></div>
        <div className="relative z-30 mx-auto flex h-full w-full max-w-[1440px] items-center justify-center px-8 lg:px-32">
          <h1 className="text-5xl font-bold text-white md:text-7xl">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="w-full bg-gray-50 py-16">
        <div className="mx-auto w-full max-w-[1440px] px-8 lg:px-32">
          <h4 className="text-center text-sm font-semibold text-black">
            Have any queries?
          </h4>
          <h2 className="relative mb-10 flex justify-center text-center text-3xl font-bold after:absolute after:-bottom-3 after:h-[1px] after:w-10 after:bg-gray-500">
            We're here to help.
          </h2>
          <div className="mb-20 flex flex-col gap-4 md:flex-row">
            <div className="w-full rounded-lg border border-gray-200 bg-white px-5 py-6 md:w-3/12">
              <div className="flex flex-col items-center gap-3 text-center">
                <h6 className="text-xl font-bold text-black">Sales</h6>
                <p className="text-sm font-light leading-relaxed text-gray-800">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates.
                </p>
                <a
                  href="tel:+18001234567"
                  className="text-sm font-semibold text-brand-blue"
                >
                  1800 123 4567
                </a>
              </div>
            </div>
            <div className="w-full rounded-lg border border-gray-200 bg-white px-5 py-6 md:w-3/12">
              <div className="flex flex-col items-center gap-3 text-center">
                <h6 className="text-xl font-bold text-black">Complaints</h6>
                <p className="text-sm font-light leading-relaxed text-gray-800">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates.
                </p>
                <a
                  href="tel:+18001234567"
                  className="text-sm font-semibold text-brand-blue"
                >
                  1800 123 4567
                </a>
              </div>
            </div>
            <div className="w-full rounded-lg border border-gray-200 bg-white px-5 py-6 md:w-3/12">
              <div className="flex flex-col items-center gap-3 text-center">
                <h6 className="text-xl font-bold text-black">Returns</h6>
                <p className="text-sm font-light leading-relaxed text-gray-800">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates.
                </p>
                <a
                  href="mailto:returns@devshop.com"
                  className="text-sm font-semibold text-brand-blue"
                  target="_blank"
                >
                  returns@devshop.com
                </a>
              </div>
            </div>
            <div className="w-full rounded-lg border border-gray-200 bg-white px-5 py-6 md:w-3/12">
              <div className="flex flex-col items-center gap-3 text-center">
                <h6 className="text-xl font-bold text-black">Marketing</h6>
                <p className="text-sm font-light leading-relaxed text-gray-800">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates.
                </p>
                <a
                  href="tel:+18001234567"
                  className="text-sm font-semibold text-brand-blue"
                >
                  1800 123 4567
                </a>
              </div>
            </div>
          </div>
          <div className="mb-20 flex flex-col md:flex-row">
            <div className="w-full pt-16 md:w-1/2">
              <h6 className="text-sm font-semibold text-gray-800">
                Don't be a stranger!
              </h6>
              <h2 className="mb-6 text-4xl font-bold text-black">
                You tell us. We listen.
              </h2>
              <p className="font-light leading-loose text-gray-800">
                Laborum vel, unde magnam dicta quo veniam expedita nisi,
                mollitia numquam repellat reiciendis tenetur culpa! Praesentium.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full rounded-lg border border-gray-300/60 bg-white p-5 md:p-8">
                <input
                  type="text"
                  className="mb-5 h-10 w-full rounded-sm border border-gray-300/60 px-3 outline-none"
                  placeholder="NAME"
                />
                <input
                  type="text"
                  className="mb-5 h-10 w-full rounded-sm border border-gray-300/60 px-3 outline-none"
                  placeholder="SUBJECT"
                />
                <input
                  type="email"
                  className="mb-5 h-10 w-full rounded-sm border border-gray-300/60 px-3 outline-none"
                  placeholder="EMAIL"
                />
                <textarea
                  className="mb-5 h-[200px] w-full resize-none rounded-sm border border-gray-300/60 p-3 outline-none"
                  placeholder="MESSAGE"
                ></textarea>
                <ButtonComponent
                  text="send message"
                  textClass="text-white text-sm font-semibold"
                  colorClass="bg-brand-blue hover:bg-brand-dark-blue"
                  size="h-12 w-fit rounded-sm"
                  action={() => alert("Email sent!")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactView
