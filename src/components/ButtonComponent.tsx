interface PropsType {
	size: string
	colorClass: string
	textClass: string
	type: string
	text: string
	action: any
}

const ButtonComponent = ({
	size,
	colorClass,
	type,
	text,
	textClass,
	action,
}: PropsType) => {
	return (
		<button
			className={`${size} ${textClass} px-8 uppercase transition-colors duration-300 ease ${colorClass}`}
			onClick={action}
		>
			{text}
		</button>
	)
}

export default ButtonComponent
