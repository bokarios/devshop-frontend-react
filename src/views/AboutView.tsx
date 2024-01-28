import { FaceSmileIcon } from "@heroicons/react/24/solid"

const AboutView = () => {
  const team = [
    {
      id: 1,
      name: "Harvey Spector",
      position: "Founder - CEO",
      image: "https://xsgames.co/randomusers/assets/avatars/male/75.jpg",
    },
    {
      id: 2,
      name: "Jessica Pearson",
      position: "COO",
      image: "https://xsgames.co/randomusers/assets/avatars/female/39.jpg",
    },
    {
      id: 3,
      name: "Rachel Zain",
      position: "Marketing Head",
      image: "https://xsgames.co/randomusers/assets/avatars/female/35.jpg",
    },
    {
      id: 4,
      name: "Luis Litt",
      position: "Lead Developer",
      image: "https://xsgames.co/randomusers/assets/avatars/male/35.jpg",
    },
    {
      id: 5,
      name: "Katrina Bennett",
      position: "Intern Designer",
      image: "https://xsgames.co/randomusers/assets/avatars/female/68.jpg",
    },
    {
      id: 6,
      name: "Mike Ross",
      position: "Intern Designer",
      image: "https://xsgames.co/randomusers/assets/avatars/male/36.jpg",
    },
  ]

  return (
    <>
      <div className="about relative h-[60vh] w-full bg-gray-500">
        <div className="hero-overlay absolute left-0 top-0 z-20 h-full w-full bg-blue-500 opacity-40"></div>
        <div className="relative z-30 mx-auto flex h-full w-full max-w-[1440px] items-center justify-center px-32">
          <h1 className="text-7xl font-bold text-white">About Us</h1>
        </div>
      </div>
      <div className="w-full bg-gray-50 p-16">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="flex border border-gray-100 bg-white">
            <div className="w-1/2 px-16 py-20">
              <div className="mb-8 h-1 w-20 bg-brand-blue"></div>
              <h2 className="mb-8 text-4xl font-bold capitalize text-black">
                who we are
              </h2>
              <p className="font-light leading-loose text-black">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Commodi culpa repellendus aspernatur dignissimos ea iure, nemo
                omnis? Asperiores, dolorum. Dolores dolore sapiente iusto
                necessitatibus nam.
              </p>
            </div>
            <div className="w-1/2">
              <img
                src="/img/who-we-are.jpg"
                alt=""
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-24">
        <div className="w-max-[1440px] mx-auto w-full px-32">
          <div className="mx-auto flex w-2/3 flex-col items-center">
            <div className="mb-6 h-1 w-20 bg-brand-blue"></div>
            <h4 className="mb-4 text-lg font-semibold capitalize text-gray-800">
              a few words about
            </h4>
            <h2 className="mb-4 text-4xl font-bold capitalize text-gray-800">
              our team
            </h2>
            <p className="mb-16 text-center font-light leading-relaxed text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
              eveniet ullam quisquam, voluptatibus iusto assumenda, ducimus quo
              minus dignissimos voluptas quibusdam alias.
            </p>
            <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
              {team.map((member) => (
                <div
                  key={member.id}
                  className="flex flex-col items-center rounded-sm border border-gray-100 bg-gray-100/50 px-4 py-8"
                >
                  <div className="mb-5 aspect-square h-auto w-[45%] rounded-full bg-white">
                    <img
                      src={member.image}
                      className="h-full w-full rounded-full object-cover object-right"
                      alt=""
                    />
                  </div>
                  <h2 className="font-semibold text-gray-600">{member.name}</h2>
                  <h4 className="text-sm font-normal text-gray-600">
                    {member.position}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="about relative h-[450px] w-full bg-gray-300/50">
        <div className="flex h-full w-full justify-center">
          <div className="flex h-full w-1/4 flex-col items-center justify-center bg-gray-100">
            <div className="mb-8 h-1 w-20 bg-brand-blue"></div>
            <h2 className="mb-10 text-4xl font-bold capitalize text-gray-800">
              follow us
            </h2>
            <div className="flex gap-10">
              <FaceSmileIcon className="h-auto w-6" />
              <FaceSmileIcon className="h-auto w-6" />
              <FaceSmileIcon className="h-auto w-6" />
              <FaceSmileIcon className="h-auto w-6" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutView
