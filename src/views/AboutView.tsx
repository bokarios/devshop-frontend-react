import { FaceSmileIcon } from '@heroicons/react/24/solid'

const AboutView = () => {
	const team = [
		{ id: 1, name: 'Harvey Spector', position: 'Founder - CEO', image: '' },
		{ id: 2, name: 'Jessica Pearson', position: 'COO', image: '' },
		{ id: 3, name: 'Rachel Zain', position: 'Marketing Head', image: '' },
		{ id: 4, name: 'Luis Litt', position: 'Lead Developer', image: '' },
		{ id: 5, name: 'Katrina Bennett', position: 'Intern Designer', image: '' },
		{ id: 6, name: 'Mike Ross', position: 'Intern Designer', image: '' },
	]

	return (
		<>
			<div className="w-full h-[60vh] bg-gray-500 relative about">
				<div className="w-full h-full absolute top-0 left-0 z-20 bg-blue-500 opacity-40 hero-overlay"></div>
				<div className="w-full max-w-[1440px] h-full mx-auto flex justify-center items-center px-32 relative z-30">
					<h1 className="text-7xl text-white font-bold">About Us</h1>
				</div>
			</div>
			<div className="w-full bg-gray-50 p-16">
				<div className="w-full max-w-[1440px] mx-auto">
					<div className="flex bg-white border border-gray-100">
						<div className="w-1/2 px-16 py-20">
							<div className="h-1 w-20 bg-brand-blue mb-8"></div>
							<h2 className="text-4xl font-bold text-black capitalize mb-8">
								who we are
							</h2>
							<p className="font-light text-black leading-loose">
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
				<div className="w-full w-max-[1440px] mx-auto px-32">
					<div className="flex flex-col items-center w-2/3 mx-auto">
						<div className="h-1 w-20 bg-brand-blue mb-6"></div>
						<h4 className="capitalize text-lg font-semibold text-gray-800 mb-4">
							a few words about
						</h4>
						<h2 className="capitalize text-4xl font-bold text-gray-800 mb-4">
							our team
						</h2>
						<p className="text-center font-light text-gray-800 leading-relaxed mb-16">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
							eveniet ullam quisquam, voluptatibus iusto assumenda, ducimus quo
							minus dignissimos voluptas quibusdam alias.
						</p>
						<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
							{team.map((member) => (
								<div
									key={member.id}
									className="flex flex-col items-center px-4 py-8 rounded-sm bg-gray-100/50 border border-gray-100"
								>
									<div className="w-[45%] h-auto aspect-square rounded-full bg-white mb-5">
										<img
											src="/img/hero-bg.jpg"
											className="w-full h-full object-cover object-right rounded-full"
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
			<div className="w-full h-[450px] bg-gray-300/50 about relative">
				<div className="w-full h-full flex justify-center">
					<div className="w-1/4 h-full bg-gray-100 flex flex-col items-center justify-center">
						<div className="h-1 w-20 bg-brand-blue mb-8"></div>
						<h2 className="capitalize text-4xl font-bold text-gray-800 mb-10">
							follow us
						</h2>
						<div className="flex gap-10">
							<FaceSmileIcon className="w-6 h-auto" />
							<FaceSmileIcon className="w-6 h-auto" />
							<FaceSmileIcon className="w-6 h-auto" />
							<FaceSmileIcon className="w-6 h-auto" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default AboutView
