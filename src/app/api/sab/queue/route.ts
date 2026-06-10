import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      `${process.env.SAB_URL}/api?mode=queue&output=json&apikey=${process.env.SAB_API_KEY}`,
      {
        cache: "no-store",
      }
    );

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch SABnzbd queue" },
      { status: 500 }
    );
  }
}
