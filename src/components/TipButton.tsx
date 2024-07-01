interface Props {
  value: number
  handleClick: (value: number) => void
}

function TipButton(props: Props) {
  const { value, handleClick } = props

  return (
    <button
      onClick={() => handleClick(value)}
      className='h-12 bg-cyan-900 text-white hover:text-cyan-800 hover:bg-cyan-400 focus:bg-cyan-400 rounded-lg'
    >
      {value}%
    </button>
  )
}

export default TipButton
