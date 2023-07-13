import React from 'react'
import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/'

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
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt='A photo of a random cat provided by the Cataas API' />}
      <button onClick={handleButtonClick}>New fact</button>
    </main>
  )
}
