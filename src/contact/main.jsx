import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './contact.jsx'
import '../index.css'
import Header from '../header.jsx'
import Footer from '../footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header currentPage={''}/>
    <Home />
    <Footer currentPage={''}/>
  </React.StrictMode>,
)