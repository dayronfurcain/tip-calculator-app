import logo from './assets/logo.svg'
import Bill from './components/Bill'
import Tips from './components/Tips'
import People from './components/People'
import Amount from './components/Amount'
import { useTip } from './hooks/useTip'

function App() {
  const { bill, people, tip, reset } = useTip()

  const billCount = Number(bill)
  const peopleCount = Number(people)
  const tipCount = Number(tip)

  const amountTipPerPerson =
    peopleCount <= 0 ? 0 : (billCount * (tipCount / 100)) / peopleCount

  const totalPerPerson =
    peopleCount <= 0 ? 0 : ((1 + tipCount / 100) * billCount) / peopleCount

  return (
    <main className='min-h-screen grid justify-center content-center gap-y-8 font-space-mono font-bold bg-cyan-100'>
      <img src={logo} alt='logo' className='mx-auto' />
      <div className='w-[375px] bg-white p-8 rounded-xl flex flex-col justify-center gap-y-4 lg:flex-row lg: gap-x-8  lg:w-[918px]'>
        <div className='flex flex-col gap-y-6 lg:flex-1'>
          <Bill />
          <Tips />
          <People />
        </div>

        <div className='bg-cyan-900 rounded-xl p-6 flex flex-col gap-4 lg:flex-1 lg:gap-y-8'>
          <Amount title='Tip Amount' value={amountTipPerPerson.toFixed(2)} />
          <Amount title=' Total' value={totalPerPerson.toFixed(2)} />
          <button
            className='h-12 bg-cyan-700 text-cyan-800 hover:bg-cyan-400 rounded-lg mt-auto'
            onClick={() => reset()}
          >
            Reset
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
