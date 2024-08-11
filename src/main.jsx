import React from 'react'
import ReactDOM from 'react-dom/client'
import App  from './assets/App.jsx'
import Footer from './assets/componentes/Footer.jsx'
import Home from './assets/componentes/Home.jsx'
import Navbar from './assets/componentes/Navbar.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Home></Home>
    <Footer></Footer>
  </React.StrictMode>,
)
