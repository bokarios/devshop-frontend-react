import { Link, useLocation } from 'react-router-dom'
import DevLogo from './DevLogo'
import { UserIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'

function NavigationBar() {
	let location = useLocation()

	const links = [
		{
			id: 1,
			name: 'store',
			route: '/store',
		},
		{
			id: 2,
			name: 'men',
			route: '/men',
		},
		{
			id: 3,
			name: 'women',
			route: '/women',
		},
		{
			id: 4,
			name: 'accessories',
			route: '/accessories',
		},
	]

	return (
		<nav
			className={`w-full h-28 ${
				location.pathname === '/'
					? 'bg-[#00000014] absolute left-0 top-0 z-50'
					: 'bg-white text-gray-800 border-b border-b-gray-200'
			}`}
		>
			<div className="w-full h-full flex justify-between items-center px-10">
				<div className="flex items-center h-full gap-14">
					<Link to="/">
						<div className="w-20">
							<DevLogo dark={location.pathname !== '/'} />
						</div>
					</Link>
					<div
						className={`flex items-center gap-6 ${
							location.pathname === '/' ? 'text-gray-50' : 'text-gray-800'
						}`}
					>
						{links.map((link) => (
							<Link
								to={link.route}
								key={link.id}
								className={`uppercase font-normal transition-colors duration-300 ease ${
									location.pathname !== '/' && 'hover:text-[#0084d6]'
								}`}
							>
								{link.name}
							</Link>
						))}
					</div>
				</div>
				<div
					className={`flex items-center gap-8 ${
						location.pathname === '/' ? 'text-gray-50' : 'text-gray-800'
					}`}
				>
					<div className="flex items-center gap-6">
						<Link
							to="/about"
							className={`uppercase font-medium transition-colors duration-300 ease ${
								location.pathname !== '/' && 'hover:text-[#0084d6]'
							}`}
						>
							about
						</Link>
						<Link
							to="/contact"
							className={`uppercase font-medium transition-colors duration-300 ease ${
								location.pathname !== '/' && 'hover:text-[#0084d6]'
							}`}
						>
							contact us
						</Link>
					</div>
					<div className="flex items-center gap-6">
						<button
							className={`flex gap-1 group ${
								location.pathname === '/'
									? 'text-gray-50'
									: 'text-gray-800 hover:text-[#0084f6]'
							}`}
						>
							<div className="font-bold">$0.00</div>
							<div className="relative">
								<ShoppingBagIcon className="w-5 h-5" />
								<div
									className={`absolute -top-1.5 -right-2 w-4 h-4 rounded-full flex justify-center items-center ${
										location.pathname === '/'
											? 'bg-white text-gray-800'
											: 'bg-gray-800 text-gray-50 group-hover:bg-[#0084f6]'
									}`}
								>
									<div className="text-xs">0</div>
								</div>
							</div>
						</button>
						<button>
							<UserIcon
								className={`w-5 h-5 ${
									location.pathname === '/'
										? 'text-gray-50'
										: 'text-gray-800 hover:text-[#0084f6]'
								}`}
							/>
						</button>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default NavigationBar
