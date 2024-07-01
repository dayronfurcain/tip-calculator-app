import { useContext } from 'react'
import { TipContext, TipContextInterface } from '../contexts/TipContext'

export const useTip = () => useContext(TipContext) as TipContextInterface
