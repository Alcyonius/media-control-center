const TMDB_API = "https://api.themoviedb.org/3";

export async function searchTMDB(query: string) {
  const res = await fetch(
    `${TMDB_API}/search/multi?api_key=${process.env.TMDB_API_KEY}&query=${encodeURIComponent(query)}`
  );

  if (!res.ok) {
    throw new Error("TMDB search failed");
  }

  return res.json();
}
