import ButtonComponent from '../components/ButtonComponent'

const ContactView = () => {
	return (
		<>
			<div className="w-full h-[60vh] bg-gray-500 relative contact">
				<div className="w-full h-full absolute top-0 left-0 z-20 bg-blue-500 opacity-40 hero-overlay"></div>
				<div className="w-full max-w-[1440px] h-full mx-auto flex justify-center items-center px-32 relative z-30">
					<h1 className="text-7xl text-white font-bold">Contact Us</h1>
				</div>
			</div>
			<div className="w-full bg-gray-50 py-16">
				<div className="w-full max-w-[1440px] mx-auto px-32">
					<h4 className="text-center text-sm font-semibold text-black">
						Have any queries?
					</h4>
					<h2 className="text-center text-3xl font-bold mb-10 relative flex justify-center after:absolute after:w-10 after:h-[1px] after:bg-gray-500 after:-bottom-3">
						We're here to help.
					</h2>
					<div className="flex gap-4 mb-20">
						<div className="w-3/12 bg-white rounded-lg border border-gray-200 px-5 py-6">
							<div className="flex flex-col items-center text-center gap-3">
								<h6 className="text-xl font-bold text-black">Sales</h6>
								<p className="text-sm font-light text-gray-800 leading-relaxed">
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
						<div className="w-3/12 bg-white rounded-lg border border-gray-200 px-5 py-6">
							<div className="flex flex-col items-center text-center gap-3">
								<h6 className="text-xl font-bold text-black">Complaints</h6>
								<p className="text-sm font-light text-gray-800 leading-relaxed">
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
						<div className="w-3/12 bg-white rounded-lg border border-gray-200 px-5 py-6">
							<div className="flex flex-col items-center text-center gap-3">
								<h6 className="text-xl font-bold text-black">Returns</h6>
								<p className="text-sm font-light text-gray-800 leading-relaxed">
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
						<div className="w-3/12 bg-white rounded-lg border border-gray-200 px-5 py-6">
							<div className="flex flex-col items-center text-center gap-3">
								<h6 className="text-xl font-bold text-black">Marketing</h6>
								<p className="text-sm font-light text-gray-800 leading-relaxed">
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
					<div className="flex mb-20">
						<div className="w-1/2 pt-16">
							<h6 className="text-sm font-semibold text-gray-800">
								Don't be a stranger!
							</h6>
							<h2 className="text-4xl font-bold text-black mb-6">
								You tell us. We listen.
							</h2>
							<p className="font-light text-gray-800 leading-loose">
								Laborum vel, unde magnam dicta quo veniam expedita nisi,
								mollitia numquam repellat reiciendis tenetur culpa! Praesentium.
							</p>
						</div>
						<div className="w-1/2">
							<div className="w-full bg-white border border-gray-300/60 rounded-lg p-8">
								<input
									type="text"
									className="outline-none w-full h-10 px-3 border border-gray-300/60 rounded-sm mb-5"
									placeholder="NAME"
								/>
								<input
									type="text"
									className="outline-none w-full h-10 px-3 border border-gray-300/60 rounded-sm mb-5"
									placeholder="SUBJECT"
								/>
								<input
									type="email"
									className="outline-none w-full h-10 px-3 border border-gray-300/60 rounded-sm mb-5"
									placeholder="EMAIL"
								/>
								<textarea
									className="outline-none w-full h-[200px] resize-none p-3 border border-gray-300/60 rounded-sm mb-5"
									placeholder="MESSAGE"
								></textarea>
								<ButtonComponent
									text="send message"
									textClass="text-white text-sm font-semibold"
									colorClass="bg-brand-blue hover:bg-brand-dark-blue"
									size="h-12 w-fit rounded-sm"
									type="default"
									action={() => alert('Email sent!')}
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
