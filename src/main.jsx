import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Estilo Global
import './index.css'
import Home from './pages/Home.jsx'

// Importação de Componentes
import App from './App.jsx'
import Movie from './pages/Movie.jsx'
import Search from './pages/search.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="movie/:id" element={<Movie />} />
            <Route path="search" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
