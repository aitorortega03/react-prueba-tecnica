import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'

// const CAT_IMAGE_URL = `https://cataas.com/cat/says/${}` esta api ya no funciona como en el curso

export default function App () {
  const [fact, setFact] = useState() // no pasar el setFact
  const [imageUrl, setImageUrl] = useState()

  // recuperar fact
  useEffect(() => {
    getRandomFact()
      .then(fact => setFact(fact))
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

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>App de gatos</h1>
      <button onClick={handleClick}>Get new fact</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt='Image extracted using the first word of fact' />}
      </section>
    </main>
  )
}
