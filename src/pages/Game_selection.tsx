import React, { useState } from 'react'
import { Star, StarOff } from 'lucide-react'

const GAMES = [
  {
    id: 1,
    name: 'The Legend of Zelda',
    image: '/images/zelda.jpg',
    textColor: 'text-yellow-200',
    font: 'font-serif'
  },
  {
    id: 2,
    name: 'Elden Ring',
    image: '/images/eldenring.jpg',
    textColor: 'text-green-200',
    font: 'font-black'
  },
  {
    id: 3,
    name: 'Mario Kart',
    image: '/images/mariokart.jpg',
    textColor: 'text-red-200',
    font: 'font-bold'
  },
  {
    id: 4,
    name: 'Minecraft',
    image: '/images/minecraft.jpg',
    textColor: 'text-green-100',
    font: 'font-mono'
  },
  {
    id: 5,
    name: 'Stardew Valley',
    image: '/images/stardewvalley.jpg',
    textColor: 'text-blue-100',
    font: 'font-light'
  },
  {
    id: 6,
    name: 'Overwatch',
    image: '/images/overwatch.jpg',
    textColor: 'text-orange-200',
    font: 'font-extrabold'
  },
  {
    id: 7,
    name: 'Hades',
    image: '/images/hades.jpg',
    textColor: 'text-red-100',
    font: 'font-black'
  },
  {
    id: 8,
    name: 'Hollow Knight',
    image: '/images/hollowknight.jpg',
    textColor: 'text-indigo-100',
    font: 'font-serif'
  },
  {
    id: 9,
    name: 'Celeste',
    image: '/images/celeste.jpg',
    textColor: 'text-pink-100',
    font: 'font-light'
  }
]

const GameSelectionPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [favorites, setFavorites] = useState<number[]>([])

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
    <div className="min-h-screen bg-green-100 overflow-y-auto">
      {/* Green banner with search bar inside light green container */}
      <div className="bg-green-900 py-6 px-4 shadow w-full">
        <div className="max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="Search for a game..."
            className="w-full px-4 py-2 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">
        {/* Favorites section */}
        {favoriteGames.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Favorites</h2>
            <div className="flex flex-col gap-6">
              {favoriteGames.map(game => (
                <GameCard key={game.id} game={game} toggleFavorite={toggleFavorite} isFavorite />
              ))}
            </div>
          </section>
        )}

        {/* Games section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Games</h2>
          <div className="flex flex-col gap-6">
            {nonFavoriteGames.map(game => (
              <GameCard key={game.id} game={game} toggleFavorite={toggleFavorite} isFavorite={false} />
            ))}
          </div>
        </section>
      </div>
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
}

const GameCard = ({ game, toggleFavorite, isFavorite }: GameCardProps) => {
  return (
    <div
      className="relative rounded-3xl overflow-hidden shadow hover:shadow-xl transition w-full min-h-[200px] cursor-pointer"
      style={{
        backgroundImage: `url(${game.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay with game name */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h2 className={`text-4xl ${game.textColor} ${game.font} drop-shadow-lg`}>
          {game.name}
        </h2>
      </div>

      {/* Favorite button */}
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
