import React, { useEffect, useState } from 'react'
import './App.css'
import { getFact } from './services/facts'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/'

export function App () {
  const [imageUrl, setImageUrl] = useState()
  const [fact, setFact] = useState()
  const [factError, setFactError] = useState()

  function getFact () {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }

  useEffect(() => {
    getFact()
  }, [])

  function handleButtonClick () {
    getFact()
  }

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

  return (
    <main>
      <h1>Cats app</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt='A photo of a random cat provided by the Cataas API' />}
      <button onClick={handleButtonClick}>New fact</button>
    </main>
  )
}
