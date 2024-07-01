import iconPerson from '../assets/icon-person.svg'
import { useTip } from '../hooks/useTip'

function People() {
  const { people, handleChangePeople } = useTip()

  const peopleCount = Number(people)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChangePeople(Number(e.target.value).toString())
  }

  return (
    <div className='flex flex-col gap-y-2'>
      <div className='flex justify-between text-sm'>
        <label htmlFor='people' className='text-gray-400'>
          Number of People
        </label>
        {peopleCount <= 0 ? (
          <span className='text-red-500'>Can't be zero</span>
        ) : (
          <></>
        )}
      </div>
      <div className='relative'>
        <input
          id='people'
          type='number'
          min={0}
          placeholder='0'
          className={`w-full h-12 pl-6 text-right text-cyan-800 bg-gray-100 rounded-lg outline-cyan-800 ${
            peopleCount <= 0 ? 'border-red-500 border-2' : ''
          }`}
          value={people}
          onChange={handleChange}
        />
        <img
          src={iconPerson}
          alt='icon person'
          className='absolute left-4 top-1/2 -translate-y-1/2'
        />
      </div>
    </div>
  )
}

export default People
