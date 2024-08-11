//Permite tener codigo JS con HTML
import React from "react";
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./assets/componentes/Footer";
import Home from "./assets/componentes/Home";
import MyNavbar from "./assets/componentes/Navbar";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <MyNavbar></MyNavbar>
      <Home></Home>
      <Footer></Footer>
    </React.StrictMode>,
  )
  