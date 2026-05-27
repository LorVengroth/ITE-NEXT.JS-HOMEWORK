export async function GET() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_FAKE_STORE}/products`)

  const products = await response.json()

  return Response.json(products)
}