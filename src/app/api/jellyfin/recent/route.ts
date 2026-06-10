import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      `${process.env.JELLYFIN_URL}/Users/${process.env.JELLYFIN_USER_ID}/Items/Latest?Limit=12`,
      {
        headers: {
          "X-Emby-Token": process.env.JELLYFIN_API_KEY || "",
        },
        cache: "no-store",
      }
    );

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch Jellyfin data" },
      { status: 500 }
    );
  }
}
