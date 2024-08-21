import { useState } from 'react'
import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import LandingPage from './page/LandingPage'
import Dex from './page/Dex'

function Layout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<LandingPage />} />
        <Route path="/dex" element={<Dex />} />
      </Route>
    </Routes >
  )
}

export default App
