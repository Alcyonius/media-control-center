import { CONFIG } from "@/lib/config";

export default function QuickLinks() {
  return (
    <div className="flex flex-wrap gap-3">

      <a
        href={`http://${CONFIG.serverIp}:8080`}
        target="_blank"
        className="bg-orange-500 hover:bg-orange-400 transition-all px-4 py-2 rounded-xl font-semibold"
      >
        SABnzbd
      </a>

      <a
        href={`http://${CONFIG.serverIp}:8096`}
        target="_blank"
        className="bg-blue-500 hover:bg-blue-400 transition-all px-4 py-2 rounded-xl font-semibold"
      >
        Jellyfin
      </a>

      <a
        href={`http://${CONFIG.serverIp}:7878`}
        target="_blank"
        className="bg-green-600 hover:bg-green-500 transition-all px-4 py-2 rounded-xl font-semibold"
      >
        Radarr
      </a>

      <a
        href={`http://${CONFIG.serverIp}:8989`}
        target="_blank"
        className="bg-cyan-600 hover:bg-cyan-500 transition-all px-4 py-2 rounded-xl font-semibold"
      >
        Sonarr
      </a>

      <a
        href={`http://${CONFIG.serverIp}:5055`}
        target="_blank"
        className="bg-purple-600 hover:bg-purple-500 transition-all px-4 py-2 rounded-xl font-semibold"
      >
        Seerr
      </a>

    </div>
  );
}
