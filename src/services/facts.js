const RANDOM_FACT_URL = 'https://catfact.ninja/fact?max_length=300'

export const getRandomFact = () => {
  return fetch(RANDOM_FACT_URL)
    .then(response => response.json())
    .then(data => {
      const { fact } = data
      return fact
    })
}
