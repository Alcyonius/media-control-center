import { NextRequest, NextResponse } from "next/server";
import { searchTMDB } from "@/lib/tmdb";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("query");

  if (!query) {
    return NextResponse.json([]);
  }

  try {
    const data = await searchTMDB(query);

    return NextResponse.json(data.results || []);
  } catch (err) {
    return NextResponse.json(
      { error: "Search failed" },
      { status: 500 }
    );
  }
}
