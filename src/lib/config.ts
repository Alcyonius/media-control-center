export const CONFIG = {
  serverIp: process.env.NEXT_PUBLIC_SERVER_IP,

  services: {
    sabnzbd: {
      url: process.env.SABNZBD_URL,
      apiKey: process.env.SABNZBD_API_KEY,
      port: "8080",
    },

    jellyfin: {
      url: process.env.JELLYFIN_URL,
      apiKey: process.env.JELLYFIN_API_KEY,
      userId: process.env.JELLYFIN_USER_ID,
      port: "8096",
    },

    radarr: {
      url: process.env.RADARR_URL,
      apiKey: process.env.RADARR_API_KEY,
      port: "7878",
    },

    sonarr: {
      url: process.env.SONARR_URL,
      apiKey: process.env.SONARR_API_KEY,
      port: "8989",
    },

    seerr: {
      url: process.env.SEERR_URL,
      apiKey: process.env.SEERR_API_KEY,
      port: "5055",
    },
  },

  app: {
    name: "Media Control Center",
    refreshInterval: 5000,
    tvMode: false,
    mobileMode: true,
  },
};
