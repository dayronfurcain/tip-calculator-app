interface Props {
  title: string
  value: string
}

function Amount(props: Props) {
  const { title, value } = props

  return (
    <div className='flex justify-between items-center'>
      <div className='flex flex-col text-sm gap-1'>
        <span className='text-white'>{title}</span>
        <span className='text-cyan-600'>/ person</span>
      </div>
      <span className='text-xl text-cyan-500'>${value}</span>
    </div>
  )
}

export default Amount
