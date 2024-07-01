import { createContext, useState } from 'react'

export interface TipContextInterface {
  bill: string
  people: string
  tip: string
  handleChangeBill: (value: string) => void
  handleChangePeople: (value: string) => void
  handleChangeTip: (value: string) => void
  reset: () => void
}

export const TipContext = createContext<TipContextInterface | null>(null)

export const TipProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [bill, setBill] = useState('')
  const [people, setPeople] = useState('')
  const [tip, setTip] = useState('')

  const handleChangeBill = (value: string) => {
    setBill(value)
  }

  const handleChangePeople = (value: string) => {
    setPeople(value)
  }

  const handleChangeTip = (value: string) => {
    setTip(value)
  }

  const reset = () => {
    setBill('')
    setPeople('')
    setTip('')
  }

  return (
    <TipContext.Provider
      value={{
        bill,
        people,
        tip,
        handleChangeBill,
        handleChangePeople,
        handleChangeTip,
        reset
      }}
    >
      {children}
    </TipContext.Provider>
  )
}
