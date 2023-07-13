import React from 'react'
import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export function App () {
  const { fact, getRandomFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleButtonClick = async () => {
    getRandomFact()
  }

  return (
    <main>
      <h1>Cats app</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${imageUrl}`} alt='A photo of a random cat provided by the Cataas API' />}
      <button onClick={handleButtonClick}>New fact</button>
    </main>
  )
}
