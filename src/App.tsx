import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/Login'
import PlayerPage from './pages/Player'
import SpectatorPage from './pages/Spectator'
import DeveloperPage from './pages/Developer'
import GameSelectionPage from './pages/Game_selection'
import GamemodeSelectionPage from './pages/Gamemode_selection'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/player" element={<PlayerPage />} />
        <Route path="/spectator" element={<SpectatorPage />} />
        <Route path="/developer" element={<DeveloperPage />} />
        <Route path="/Game_selection" element={<GameSelectionPage />} />
        <Route path="/Gamemode_selection" element={<GamemodeSelectionPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App