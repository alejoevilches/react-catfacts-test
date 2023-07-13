const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getFact = async () => {
  return fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then((res) => res.json())
    .then(data => {
      const { fact } = data
      return fact
    })
}
