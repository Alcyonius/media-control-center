import Header from "@/components/dashboard/Header";
import SearchBar from "@/components/search/SearchBar";

import {
  getSabQueue,
  getRecentJellyfin,
  getRadarrHealth,
  getSonarrHealth,
} from "@/lib/api";

export const revalidate = 5;

export default async function Home() {

  // FETCH DATA
  const sabData = await getSabQueue();
  const recent = await getRecentJellyfin();
  const radarr = await getRadarrHealth();
  const sonarr = await getSonarrHealth();

  // SAFE FALLBACKS
  const slots = sabData?.queue?.slots || [];
  const recentItems = recent || [];

  // SERVICE STATUS
  const radarrOnline = Array.isArray(radarr);
  const sonarrOnline = Array.isArray(sonarr);

  return (
    <main className="min-h-screen bg-[#0b0f19] text-white p-8">

      {/* HEADER */}
      <SearchBar />
      <Header
  title="Media Control Center"
  subtitle="Unified media dashboard"
/>

        {/* QUICK LINKS */}
        <div className="flex flex-wrap gap-3">

          <a
            href="http://192.168.1.119:8080"
            target="_blank"
            className="bg-orange-500 hover:bg-orange-400 transition-all px-4 py-2 rounded-xl font-semibold"
          >
            SABnzbd
          </a>

          <a
            href="http://192.168.1.119:8096"
            target="_blank"
            className="bg-blue-500 hover:bg-blue-400 transition-all px-4 py-2 rounded-xl font-semibold"
          >
            Jellyfin
          </a>

          <a
            href="http://192.168.1.119:7878"
            target="_blank"
            className="bg-green-600 hover:bg-green-500 transition-all px-4 py-2 rounded-xl font-semibold"
          >
            Radarr
          </a>

          <a
            href="http://192.168.1.119:8989"
            target="_blank"
            className="bg-cyan-600 hover:bg-cyan-500 transition-all px-4 py-2 rounded-xl font-semibold"
          >
            Sonarr
          </a>

          <a
            href="http://192.168.1.119:5055"
            target="_blank"
            className="bg-purple-600 hover:bg-purple-500 transition-all px-4 py-2 rounded-xl font-semibold"
          >
            Seerr
          </a>

        </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 mb-8">

        {/* DOWNLOADS */}
        <div className="bg-[#151b2d] rounded-2xl p-5 border border-white/5">

          <p className="text-gray-400 text-sm">
            Active Downloads
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {slots.length}
          </h2>

        </div>

        {/* RECENT */}
        <div className="bg-[#151b2d] rounded-2xl p-5 border border-white/5">

          <p className="text-gray-400 text-sm">
            Recently Added
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {recentItems.length}
          </h2>

        </div>

        {/* RADARR */}
        <div className="bg-[#151b2d] rounded-2xl p-5 border border-white/5">

          <p className="text-gray-400 text-sm">
            Radarr
          </p>

          <h2
            className={`text-2xl font-bold mt-3 ${
              radarrOnline
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {radarrOnline ? "Online" : "Offline"}
          </h2>

        </div>

        {/* SONARR */}
        <div className="bg-[#151b2d] rounded-2xl p-5 border border-white/5">

          <p className="text-gray-400 text-sm">
            Sonarr
          </p>

          <h2
            className={`text-2xl font-bold mt-3 ${
              sonarrOnline
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {sonarrOnline ? "Online" : "Offline"}
          </h2>

        </div>

        {/* SERVER */}
        <div className="bg-[#151b2d] rounded-2xl p-5 border border-white/5">

          <p className="text-gray-400 text-sm">
            Server Status
          </p>

          <h2 className="text-2xl font-bold mt-3 text-green-400">
            Online
          </h2>

        </div>

        {/* REFRESH */}
        <div className="bg-[#151b2d] rounded-2xl p-5 border border-white/5">

          <p className="text-gray-400 text-sm">
            Auto Refresh
          </p>

          <h2 className="text-2xl font-bold mt-3 text-blue-400">
            5s
          </h2>

        </div>

      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* SAB PANEL */}
        <div className="bg-[#151b2d] rounded-3xl p-6 shadow-2xl border border-white/5">

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-3xl font-bold">
              Active Downloads
            </h2>

            <span className="text-sm text-gray-400">
              SABnzbd Queue
            </span>

          </div>

          {slots.length === 0 ? (

            <div className="bg-white/5 rounded-2xl p-10 text-center border border-white/5">

              <p className="text-gray-300 text-xl font-semibold">
                No active downloads
              </p>

              <p className="text-gray-500 mt-2">
                SABnzbd queue is currently empty
              </p>

            </div>

          ) : (

            <div className="space-y-5">

              {slots.map((item: any) => (

                <div
                  key={item.nzo_id}
                  className="bg-white/5 hover:bg-white/10 transition-all duration-300 p-5 rounded-2xl border border-white/5 hover:border-green-500/30"
                >

                  {/* TOP */}
                  <div className="flex justify-between items-center gap-4">

                    <p className="font-semibold truncate text-lg">
                      {item.filename}
                    </p>

                    <span className="text-sm text-green-400 whitespace-nowrap">
                      {item.status}
                    </span>

                  </div>

                  {/* PROGRESS */}
                  <div className="w-full bg-[#0f172a] rounded-full h-4 mt-4 overflow-hidden">

                    <div
                      className="bg-gradient-to-r from-green-400 to-green-600 h-4 rounded-full transition-all duration-500"
                      style={{
                        width: `${item.percentage}%`,
                      }}
                    />

                  </div>

                  {/* DETAILS */}
                  <div className="flex justify-between text-sm text-gray-300 mt-3">

                    <span>
                      {item.percentage}%
                    </span>

                    <span>
                      ETA {item.timeleft}
                    </span>

                  </div>

                  {/* EXTRA */}
                  <div className="flex justify-between text-xs text-gray-500 mt-2">

                    <span>
                      {item.mb} MB
                    </span>

                    <span>
                      Priority: {item.priority}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

        {/* JELLYFIN PANEL */}
        <div className="bg-[#151b2d] rounded-3xl p-6 shadow-2xl border border-white/5">

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-3xl font-bold">
              Recently Added
            </h2>

            <span className="text-sm text-gray-400">
              Jellyfin Library
            </span>

          </div>

          {recentItems.length === 0 ? (

            <div className="bg-white/5 rounded-2xl p-10 text-center border border-white/5">

              <p className="text-gray-300 text-xl font-semibold">
                No recent media
              </p>

            </div>

          ) : (

            <div className="space-y-4 max-h-[900px] overflow-y-auto pr-2">

              {recentItems.map((item: any) => (

                <a
                  key={item.Id}
                  href={`http://192.168.1.119:8096/web/#/details?id=${item.Id}`}
                  target="_blank"
                  className="block bg-[#252938] hover:bg-[#2d3345] transition-all duration-300 p-4 rounded-2xl flex gap-4 items-center border border-transparent hover:border-blue-400/30"
                >

                  <img
                    src={`http://192.168.1.119:8096/Items/${item.Id}/Images/Primary`}
                    alt={item.Name}
                    className="w-20 h-28 object-cover rounded-xl shadow-lg"
                  />

                  <div className="flex-1">

                    <p className="font-bold text-lg">
                      {item.Name}
                    </p>

                    <p className="text-sm text-gray-400 mt-1">
                      {item.Type}
                    </p>

                    <p className="text-xs text-gray-500 mt-2">
                      {item.ProductionYear}
                    </p>

                  </div>

                </a>

              ))}

            </div>

          )}

        </div>

      </div>

    </main>
  );
}
