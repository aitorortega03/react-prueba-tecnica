import { useEffect, useState } from 'react'

const RANDOM_FACT_URL = 'https://catfact.ninja/fact?max_length=300'

// const CAT_IMAGE_URL = `https://cataas.com/cat/says/${}`

export default function App () {
  const [fact, setFact] = useState('hello')
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    fetch(RANDOM_FACT_URL)
      .then(response => response.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
        const firstWord = fact.split(' ')[0] // para las 3 primeras palabras sería fact.split(' ').slice(0, 3).join(' ') o fact.split(' ', 3)

        fetch(`https://cataas.com/cat/says/${firstWord}`)
          .then(response => response.json())
          .then(data => {
            const { url } = data
            setImageUrl(url)
          })
      })
  }, [])

  return (
    <main>
      <h1>App de gatos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt='Image extracted using the first word of fact' />}
    </main>
  )
}
