export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center gap-4">
      <h1 className="text-4xl font-bold">Bienvenue sur Bingo Jeux Vidéo</h1>
      <nav className="flex flex-col gap-2 mt-4">
        <a href="/player" className="text-blue-500 hover:underline">Mode Joueur</a>
        <a href="/spectator" className="text-green-500 hover:underline">Mode Spectateur</a>
        <a href="/developer" className="text-gray-500 hover:underline">Mode Développeur</a>
      </nav>
    </div>
  )
}
