import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify/unstyled'
import HomePage from './pages/HomePage'
import CadastroPage from './pages/CadastroPage'
import ListaPage from './pages/ListaPage'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastro" element={<CadastroPage />} />
          <Route path="/lista" element={<ListaPage />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer autoClose={4000} />
    </div>
  )
}

export default App
