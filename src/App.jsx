import React from 'react'
import Layout from './layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Tours from './pages/tours/Tours'

const App = () => {
  return (
    <>
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='tours' element={<Tours/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App