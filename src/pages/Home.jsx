import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"

import "../styles/MovieGrid.css"

const moviesURL = import.meta.env.VITE_API
const api_key = import.meta.env.VITE_API_KEY

const Home = () => {
  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) => {

      const res = await fetch(url)
      const data = await res.json()

      setTopMovies(data.results)

  }

  useEffect(() => {

    const topRatedUrl = `${moviesURL}top_rated?${api_key}`
    getTopRatedMovies(topRatedUrl)

  }, [])

  return (
    <div className="container">
      <h2 className="title">Melhores Filmes</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && 
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  )
}

export default Home