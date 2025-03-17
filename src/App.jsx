import { useEffect, useState } from 'react'
import './App.css'

const RANDOM_FACT_URL = 'https://catfact.ninja/fact?max_length=300'

// const CAT_IMAGE_URL = `https://cataas.com/cat/says/${}` esta api ya no funciona como en el curso

export default function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // recuperar fact
  useEffect(() => {
    fetch(RANDOM_FACT_URL)
      .then(response => response.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  // recuperar img teniendo el fact
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

  return (
    <main>
      <h1>App de gatos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt='Image extracted using the first word of fact' />}
      </section>
    </main>
  )
}
