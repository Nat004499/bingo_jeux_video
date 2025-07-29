import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Player from './pages/Player'
import Spectator from './pages/Spectator'
import Developer from './pages/Developer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    {/*Configuration for local development*/}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player" element={<Player />} />
        <Route path="/spectator" element={<Spectator />} />
        <Route path="/developer" element={<Developer />} />
      </Routes>
    </BrowserRouter>

    {/*Uncomment the following line to set the base path for GitHub Pages
    <BrowserRouter basename="/bingo_jeux_video">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player" element={<Player />} />
        <Route path="/spectator" element={<Spectator />} />
        <Route path="/developer" element={<Developer />} />
      </Routes>
    </BrowserRouter>
    */}

  </React.StrictMode>
)
