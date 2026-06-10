export const config = {
  sabnzbd: {
    url: process.env.SABNZBD_URL!,
    apiKey: process.env.SABNZBD_API_KEY!,
  },

  jellyfin: {
    url: process.env.JELLYFIN_URL!,
    apiKey: process.env.JELLYFIN_API_KEY!,
  },

  radarr: {
    url: process.env.RADARR_URL!,
    apiKey: process.env.RADARR_API_KEY!,
  },

  sonarr: {
    url: process.env.SONARR_URL!,
    apiKey: process.env.SONARR_API_KEY!,
  },
}
