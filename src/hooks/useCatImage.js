import { useEffect, useState } from 'react'

export function useCatImage ({ fact }) {
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
