import { Link, useNavigate } from "react-router-dom"
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi"
import { useState } from "react"
import "../styles/Navbar.css"

function Navbar() {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!search) return
    
    navigate(`/search?q=${search}`)
    setSearch("")

  }


  return (
    <nav id="navbar">
        <h2>
            <Link to="/"> 
              <BiCameraMovie /> MovieDB
              </Link>
        </h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Buscar Filme" onChange={(e) => setSearch(e.target.value)} value={search}/>
          <button type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
    </nav>
  )
}

export default Navbar