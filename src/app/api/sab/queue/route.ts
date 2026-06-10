export async function GET() {
  const response = await fetch(
    `${process.env.SAB_URL}/api?mode=queue&output=json&apikey=${process.env.SAB_API_KEY}`
  )

  const data = await response.json()

  return Response.json(data)
}
