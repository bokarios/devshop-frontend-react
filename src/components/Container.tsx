function Container(props: any) {
	return (
		<div className="w-full max-w-[1440px] mx-auto px-8 md:px-16 lg:px-32">
			{props.children}
		</div>
	)
}

export default Container
