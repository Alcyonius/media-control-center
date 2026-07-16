export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
      <div className="text-center space-y-4">

        <h1 className="text-6xl font-bold">
          Media Control Center
        </h1>

        <p className="text-zinc-400 text-xl">
          HomeLabV2
        </p>

        <div className="mt-10 rounded-xl border border-green-500/30 bg-green-500/10 p-6">

          <h2 className="text-2xl font-semibold text-green-400">
            🚀 MCC v2
          </h2>

          <p className="mt-2 text-zinc-300">
            Successfully running inside Docker.
          </p>

        </div>

      </div>
    </main>
  )
}
