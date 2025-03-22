import './App.css'
import { useCatFact } from './hooks/useCatFact'
import useCatImage from './hooks/useCatImage'

// const CAT_IMAGE_URL = `https://cataas.com/cat/says/${}` esta api ya no funciona como en el curso

export default function App () {
  const { fact, getRandomFactAndUpdateState } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  // recuperar img teniendo el fact

  const handleClick = async () => {
    getRandomFactAndUpdateState()
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
