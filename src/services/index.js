import axios from 'axios'

async function getMovies (searchTerm) {
  const response = await axios.get(`http://www.omdbapi.com/?s=${ searchTerm || 'man' }&apikey=28ccbf93`)
  return response.data.Search
}

export default getMovies