import './App.css'
import Actividades from './components/Actividades'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Institucionales from './components/Institucionales'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'


function App() {

  return (
    <>
      <Navbar />
      <Hero/>
      <Actividades/>
      <Institucionales/>
      <Footer/>
    </>
  )
}

export default App
