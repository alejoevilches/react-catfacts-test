import React, { useEffect, useState } from 'react'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL='https://cataas.com/'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
        const firstWord = (fact.split(' ')[0])

        fetch(`https://cataas.com/c/s/${firstWord}?json=true`)
          .then(res => res.json())
          .then(data => {
            const { url } = data
            setImageUrl(url)
          })
      })
  }, [])
  return (
    <>
      <h1>App de Gatos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt='A photo of a random cat provided by the Cataas API' />}
    </>
  )
}
