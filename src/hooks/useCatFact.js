import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () { // no poner useCatFetch, es una caja negra que no puede ir atado a la implementación
  const [fact, setFact] = useState() // no pasar el setFact a getRandomFact porque es mala práctica usar el estado en funciones que no son de react

  const getRandomFactAndUpdateState = () => {
    getRandomFact()
      .then(fact => setFact(fact))
  }

  // recuperar fact
  useEffect(getRandomFactAndUpdateState, []) // si veo algún useEffect en un componente, preguntarme si puedo sacarlo a un custom hook

  return { fact, getRandomFactAndUpdateState }
}
