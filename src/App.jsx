import { useEffect, useState } from 'react'

const RANDOM_FACT_URL = 'https://cat-fact.herokuapp.com/facts/random'

// const CAT_IMAGE_URL = `https://cataas.com/cat/says/${}`

export default function App () {
  const [fact, setFact] = useState('lorem ipsum')

  useEffect(() => {
    fetch(RANDOM_FACT_URL)
      .then(response => response.json())
      .then(data => setFact(data.fact))
  }, [])

  return (
    <main>
      <h1>App de gatos</h1>
      {fact && <p>{fact}</p>}
    </main>
  )
}
