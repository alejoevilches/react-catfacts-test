import React, { useEffect, useState } from 'react'
import './App.css'
import { getFact } from './services/facts'
import { useCatImage } from './hooks/useCatImage'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/'

export function App () {
  const [fact, setFact] = useState()
  const { imageUrl } = useCatImage({ fact })

  useEffect(() => {
    getFact().then(fact => setFact(fact))
  }, [])

  const handleButtonClick = async () => {
    const newFact = await getFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>Cats app</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt='A photo of a random cat provided by the Cataas API' />}
      <button onClick={handleButtonClick}>New fact</button>
    </main>
  )
}
