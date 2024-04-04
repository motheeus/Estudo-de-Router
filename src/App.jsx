import { Outlet } from 'react-router-dom'

// Estilo da Página
import './App.css'

// Importação de Componentes
import Navbar from "./components/Navbar"


function App() {
  
  return (
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
