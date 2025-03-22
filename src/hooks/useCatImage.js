import { useState, useEffect } from 'react'

export default function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ')[0] // para las 3 primeras palabras sería fact.split(' ').slice(0, 3).join(' ') o fact.split(' ', 3)
    console.log(firstWord)

    fetch('https://api.thecatapi.com/v1/images/0XYvRd7oD') // no funciona la api de cataas
      .then(response => response.json())
      .then(data => {
        const { url } = data
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl }
}
