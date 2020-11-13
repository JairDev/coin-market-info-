

async function getDataFetch(url) {
  try {
    const response = await fetch(url)
    if(!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }
    return response.json()
  } catch (error) {
    throw new Error(error)
  }
}

export default getDataFetch
