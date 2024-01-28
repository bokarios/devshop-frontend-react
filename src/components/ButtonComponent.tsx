interface PropsType {
  size: string
  colorClass: string
  textClass: string
  text: string
  action: any
}

const ButtonComponent = ({
  size,
  colorClass,
  text,
  textClass,
  action,
}: PropsType) => {
  return (
    <button
      className={`${size} ${textClass} ease px-8 uppercase transition-colors duration-300 ${colorClass}`}
      onClick={action}
    >
      {text}
    </button>
  )
}

export default ButtonComponent
