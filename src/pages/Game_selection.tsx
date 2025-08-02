import React, { useState } from 'react'
import { Star, StarOff } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const GAMES = [
  {
    id: 1,
    name: 'The Legend of Zelda',
    image: '/images/Game_selection_banners/zelda.jpg',
    textColor: 'text-yellow-200',
    font: 'font-serif'
  },
  {
    id: 2,
    name: 'Elden Ring',
    image: '/images/Game_selection_banners/eldenring.jpg',
    textColor: 'text-green-200',
    font: 'font-black'
  },
  {
    id: 3,
    name: 'Mario Kart',
    image: '/images/Game_selection_banners/mariokart.jpg',
    textColor: 'text-red-200',
    font: 'font-bold'
  },
  {
    id: 4,
    name: 'Minecraft',
    image: '/images/Game_selection_banners/minecraft.jpg',
    textColor: 'text-green-100',
    font: 'font-mono'
  },
  {
    id: 5,
    name: 'Stardew Valley',
    image: '/images/Game_selection_banners/stardewvalley.jpg',
    textColor: 'text-blue-100',
    font: 'font-light'
  },
  {
    id: 6,
    name: 'Overwatch',
    image: '/images/Game_selection_banners/overwatch.jpg',
    textColor: 'text-orange-200',
    font: 'font-extrabold'
  },
  {
    id: 7,
    name: 'Hades',
    image: '/images/Game_selection_banners/hades.jpg',
    textColor: 'text-red-100',
    font: 'font-black'
  },
  {
    id: 8,
    name: 'Hollow Knight',
    image: '/images/Game_selection_banners/hollowknight.jpg',
    textColor: 'text-indigo-100',
    font: 'font-serif'
  },
  {
    id: 9,
    name: 'Celeste',
    image: '/images/Game_selection_banners/celeste.jpg',
    textColor: 'text-pink-100',
    font: 'font-light'
  }
]

const GameSelectionPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [favorites, setFavorites] = useState<number[]>([])
  const [hoveredBackground, setHoveredBackground] = useState<string | null>(null)
  const navigate = useNavigate()

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [id, ...prev]
    )
  }

  const filteredGames = GAMES
    .filter(game =>
      game.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name))

  const favoriteGames = filteredGames
    .filter(game => favorites.includes(game.id))
    .sort((a, b) => a.name.localeCompare(b.name))

  const nonFavoriteGames = filteredGames
    .filter(game => !favorites.includes(game.id))

  return (
    <div className="flex flex-col h-screen relative">
      {/* Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: hoveredBackground ? `url(${hoveredBackground})` : '',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: 'background-image 0.3s ease-in-out',
        }}
      />

      {/* Header */}
      <header className="bg-green-900 py-8 shadow z-20 relative">
        {/* Centrer la search bar */}
        <div className="max-w-4xl mx-auto px-4">
          <input
            type="text"
            placeholder="Search for a game..."
            className="w-full px-4 py-2 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Login button */}
        <button
          onClick={() => navigate('/login')}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          Login
        </button>
      </header>

      {/* Scrollable content inside a max-w container */}
      <main className="overflow-y-auto flex-1 w-full relative z-10">
        <div className="max-w-4xl mx-auto px-4 pt-10 pb-10 space-y-10">
          {/* Favorites */}
          {favoriteGames.length > 0 && (
            <section>
              <h2 className="text-3xl font-extrabold text-black text-center font-serif mb-4">⭐ Favorites ⭐</h2>
              <div className="flex flex-col gap-6">
                {favoriteGames.map(game => (
                  <GameCard
                    key={game.id}
                    game={game}
                    toggleFavorite={toggleFavorite}
                    isFavorite
                    onHover={setHoveredBackground}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Games ⚔️🏹🗡️💣🕹️🎰🎲🏆*/}
          <section>
            <h2 className="text-3xl font-extrabold text-black text-center font-serif mb-4">🎮 Games 🎮</h2>
            <div className="flex flex-col gap-6">
              {nonFavoriteGames.map(game => (
                <GameCard
                  key={game.id}
                  game={game}
                  toggleFavorite={toggleFavorite}
                  isFavorite={false}
                  onHover={setHoveredBackground}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

type Game = {
  id: number
  name: string
  image: string
  textColor: string
  font: string
}

type GameCardProps = {
  game: Game
  toggleFavorite: (id: number) => void
  isFavorite: boolean
  onHover: (url: string | null) => void
}

const GameCard = ({ game, toggleFavorite, isFavorite, onHover }: GameCardProps) => {
  return (
    <div
      className="relative rounded-3xl overflow-hidden shadow hover:shadow-xl transition w-full min-h-[200px] cursor-pointer"
      style={{
        backgroundImage: `url(${game.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      onMouseEnter={() => onHover(game.image)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h2 className={`text-4xl ${game.textColor} ${game.font} drop-shadow-lg`}>
          {game.name}
        </h2>
      </div>

      {/* Favorite icon */}
      <button onClick={() => toggleFavorite(game.id)} className="absolute top-4 right-4">
        {isFavorite ? (
          <Star className="text-yellow-400 fill-yellow-400 w-7 h-7" />
        ) : (
          <StarOff className="text-white w-7 h-7" />
        )}
      </button>
    </div>
  )
}

export default GameSelectionPage
