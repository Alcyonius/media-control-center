import { NextResponse } from "next/server";
import { config } from "@/lib/config";

export async function GET() {
  try {
    const response = await fetch(
      `${config.jellyfin.url}/Users/${process.env.JELLYFIN_USER_ID}/Items/Latest?Limit=5`,
      {
        headers: {
          "X-Emby-Token": config.jellyfin.apiKey,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Jellyfin API error: ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch Jellyfin" },
      { status: 500 }
    );
  }
}
