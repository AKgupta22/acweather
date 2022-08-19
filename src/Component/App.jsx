import React from 'react'
import { BrowserRouter as BR, Routes, Route } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import Weather from './Weather'
import Contact from './Contact'
import '../asset/css/style.css'
export default function App() {
  let Api_key = process.env.REACT_APP_RAPID_API
  return (
    <BR>
      <Navbar />
      <Routes>

        <Route path='/' element={<Weather api={Api_key}/>} />
        <Route path='/Weather' element={<Weather api={Api_key}/>} />
        <Route path='Contact' element={<Contact />} />
        <Route path='*' element={<Weather api={Api_key}/>} />



      </Routes>
      <Footer />

    </BR>
  )
}
