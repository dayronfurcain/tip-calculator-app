import iconDollar from '../assets/icon-dollar.svg'
import { useTip } from '../hooks/useTip'

function Bill() {
  const { bill, handleChangeBill } = useTip()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChangeBill(Number(e.target.value).toString())
  }

  return (
    <div>
      <label htmlFor='bill' className='text-sm text-gray-400'>
        Bill
      </label>
      <div className='relative'>
        <input
          id='bill'
          type='number'
          min={0}
          placeholder='0'
          value={bill}
          className='w-full h-12 pl-6 text-right text-cyan-800 bg-gray-100 rounded-lg outline-cyan-800'
          onChange={handleChange}
        />
        <img
          src={iconDollar}
          alt='icon dollar'
          className='absolute left-4 top-1/2 -translate-y-1/2 '
        />
      </div>
    </div>
  )
}

export default Bill
