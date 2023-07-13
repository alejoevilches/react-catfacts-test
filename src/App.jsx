import React, { useEffect, useState } from 'react'
import './App.css'
import { getFact, getImage } from './services/facts'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/'

export function App () {
  const [imageUrl, setImageUrl] = useState()
  const [fact, setFact] = useState()

  useEffect(() => {
    getFact().then(fact => setFact(fact))
  }, [])

  const handleButtonClick = async () => {
    const newFact = await getFact()
    setFact(newFact)
  }

  useEffect(() => {
    if (!fact) return
    const firstWord = (fact.split(' ')[0])
    getImage(firstWord).then(url => setImageUrl(url))
  }, [fact])

  return (
    <main>
      <h1>Cats app</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt='A photo of a random cat provided by the Cataas API' />}
      <button onClick={handleButtonClick}>New fact</button>
    </main>
  )
}
