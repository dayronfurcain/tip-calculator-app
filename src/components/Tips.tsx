import TipButton from './TipButton'
import { useTip } from '../hooks/useTip'

function Tips() {
  const { tip, handleChangeTip } = useTip()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChangeTip(Number(e.target.value).toString())
  }

  const handleClick = (value: number) => {
    handleChangeTip(value.toString())
  }

  return (
    <div>
      <span className='text-sm text-gray-400'>Select Tip %</span>
      <div className='grid grid-cols-3 gap-4'>
        <TipButton value={5} handleClick={handleClick} />
        <TipButton value={10} handleClick={handleClick} />
        <TipButton value={15} handleClick={handleClick} />
        <TipButton value={20} handleClick={handleClick} />
        <TipButton value={25} handleClick={handleClick} />
        <input
          type='number'
          min={0}
          placeholder='Custom'
          className=' h-12 text-right text-cyan-800 rounded-lg bg-gray-100 outline-cyan-800'
          value={tip}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default Tips
