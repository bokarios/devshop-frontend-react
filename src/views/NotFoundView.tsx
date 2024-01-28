import { Link } from 'react-router-dom'

const NotFoundView = () => {
	return (
		<div className="flex justify-center items-center w-full h-screen overflow-hidden relative">
			<img src="/img/404-bro-illustration.svg" className="w-[40%]" alt="404" />
			<Link
				to="/"
				className="absolute bottom-20 flex items-center px-8 h-12 bg-white text-xl font-normal text-[#0084d6] border-2 border-[#0084d6] transition-colors duration-300 ease hover:bg-[#0075be] hover:text-white"
			>
				Go Home
			</Link>
		</div>
	)
}

export default NotFoundView
