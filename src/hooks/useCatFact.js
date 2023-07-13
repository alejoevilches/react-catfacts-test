import { useEffect, useState } from 'react'
import { getFact } from '../services/facts'

export const useCatFact = () => {
  const [fact, setFact] = useState()
  const getRandomFact = () => {
    getFact().then(fact => setFact(fact))
  }
  useEffect(getRandomFact, [])
  return { fact, getRandomFact }
}
