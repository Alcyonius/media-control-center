const SAB_URL = process.env.SAB_URL;
const SAB_API_KEY = process.env.SAB_API_KEY;

const JELLYFIN_URL = process.env.JELLYFIN_URL;
const JELLYFIN_API_KEY = process.env.JELLYFIN_API_KEY;
const JELLYFIN_USER_ID = process.env.JELLYFIN_USER_ID;

const RADARR_URL = process.env.RADARR_URL;
const RADARR_API_KEY = process.env.RADARR_API_KEY;

const SONARR_URL = process.env.SONARR_URL;
const SONARR_API_KEY = process.env.SONARR_API_KEY;

export async function getSabQueue() {
  try {
    const res = await fetch(
      `${SAB_URL}/api?mode=queue&output=json&apikey=${SAB_API_KEY}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch SAB queue");
    }

    return await res.json();
  } catch (error) {
    console.error("SAB ERROR:", error);

    return {
      queue: {
        slots: [],
      },
    };
  }
}

export async function getRecentJellyfin() {
  try {
    const res = await fetch(
      `${JELLYFIN_URL}/Users/${JELLYFIN_USER_ID}/Items/Latest`,
      {
        headers: {
          "X-Emby-Token": JELLYFIN_API_KEY || "",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch Jellyfin");
    }

    return await res.json();
  } catch (error) {
    console.error("JELLYFIN ERROR:", error);

    return [];
  }
}

export async function getRadarrHealth() {
  try {
    const res = await fetch(
      `${RADARR_URL}/api/v3/health?apikey=${RADARR_API_KEY}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch Radarr");
    }

    return await res.json();
  } catch (error) {
    console.error("RADARR ERROR:", error);

    return [];
  }
}

export async function getSonarrHealth() {
  try {
    const res = await fetch(
      `${SONARR_URL}/api/v3/health?apikey=${SONARR_API_KEY}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch Sonarr");
    }

    return await res.json();
  } catch (error) {
    console.error("SONARR ERROR:", error);

    return [];
  }
}
