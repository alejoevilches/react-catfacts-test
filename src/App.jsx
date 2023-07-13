import React, { useEffect, useState } from 'react'
import './App.css'
import { getFact } from './services/facts'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/'

function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    if (!fact) return
    const firstWord = (fact.split(' ')[0])
    fetch(`https://cataas.com/c/s/${firstWord}?json=true`)
      .then(res => res.json())
      .then(data => {
        const { url } = data
        setImageUrl(url)
      })
  }, [fact])
  return { imageUrl }
}

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
