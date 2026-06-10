import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await fetch(
      `${process.env.SONARR_URL}/api/v3/series`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": process.env.SONARR_API_KEY || "",
        },
        body: JSON.stringify({
          title: body.title,
          qualityProfileId: 1,
          titleSlug: body.title.toLowerCase().replace(/\s+/g, "-"),
          images: [],
          tvdbId: body.tvdbId,
          year: body.year,
          rootFolderPath: "/data/media/tv",
          monitored: true,
          addOptions: {
            searchForMissingEpisodes: true,
          },
        }),
      }
    );

    const data = await response.json();

    return NextResponse.json(data);

  } catch (err) {
    return NextResponse.json(
      { error: "TV request failed" },
      { status: 500 }
    );
  }
}
