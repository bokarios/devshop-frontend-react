import { Link } from "react-router-dom"

const NotFoundView = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <img
        src="/img/404-bro-illustration.svg"
        className="w-full md:w-[40%]"
        alt="404"
      />
      <Link
        to="/"
        className="ease absolute bottom-20 flex h-12 items-center border-2 border-[#0084d6] bg-white px-8 text-xl font-normal text-[#0084d6] transition-colors duration-300 hover:bg-[#0075be] hover:text-white"
      >
        Go Home
      </Link>
    </div>
  )
}

export default NotFoundView
