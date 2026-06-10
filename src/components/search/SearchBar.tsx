"use client";

import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch(value: string) {
    setQuery(value);

    if (!value.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);

    const res = await fetch(`/api/search?query=${value}`);
    const data = await res.json();

    setResults(data);

    setLoading(false);
  }

  async function requestMedia(item: any) {

    const isMovie = item.media_type === "movie";

    const endpoint = isMovie
      ? "/api/request/movie"
      : "/api/request/tv";

    const payload = {
      title: item.title || item.name,
      year: item.release_date?.split("-")[0],
      tmdbId: item.id,
      tvdbId: item.id,
    };

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      alert("Request sent successfully");
    } else {
      alert("Request failed");
    }
  }

  return (
    <div className="w-full mb-10">

      <input
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search movies and TV shows..."
        className="w-full bg-[#151b2d] border border-white/10 rounded-2xl p-4 text-lg outline-none"
      />

      {loading && (
        <p className="mt-4 text-gray-400">
          Searching...
        </p>
      )}

      {results.length > 0 && (

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-5">

          {results.map((item) => (

            <div
              key={item.id}
              className="bg-[#151b2d] rounded-2xl overflow-hidden border border-white/5"
            >

              {item.poster_path ? (

                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  className="w-full h-[320px] object-cover"
                />

              ) : (

                <div className="w-full h-[320px] bg-[#1e293b]" />

              )}

              <div className="p-4">

                <p className="font-bold line-clamp-2">
                  {item.title || item.name}
                </p>

                <p className="text-sm text-gray-400 mt-1">
                  {item.media_type}
                </p>

                <button
                  onClick={() => requestMedia(item)}
                  className="w-full mt-4 bg-blue-600 hover:bg-blue-500 transition-all py-2 rounded-xl font-semibold"
                >
                  Request
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}
