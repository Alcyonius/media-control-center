import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await fetch(
      `${process.env.RADARR_URL}/api/v3/movie`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": process.env.RADARR_API_KEY || "",
        },
        body: JSON.stringify({
          title: body.title,
          qualityProfileId: 5,
          titleSlug: body.title.toLowerCase().replace(/\s+/g, "-"),
          images: [],
          tmdbId: body.tmdbId,
          year: body.year,
          rootFolderPath: "/movies",
          monitored: true,
          addOptions: {
            searchForMovie: true,
          },
        }),
      }
    );

    const data = await response.json();

    return NextResponse.json(data);

  } catch (err) {
    return NextResponse.json(
      { error: "Movie request failed" },
      { status: 500 }
    );
  }
}
