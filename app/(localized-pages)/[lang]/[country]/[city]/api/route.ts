import { getCitiesByCountry, getCountry } from '@/utils/search-cities'
import { decodeUmlauts } from '../helpers'

export const GET = async (
  _request: Request,
  { params }: { params: { country: string; lang: string; city: string } }
) => {
  const { country, lang, city } = params

  const existingCountry = await getCountry(country)
  if (existingCountry.name === '') {
    return Response.json({ error: 'country_not_found' }, { status: 404 })
  }

  const cities = await getCitiesByCountry(country)
  const cityName = cities.find(
    (theCity) => theCity.toLowerCase() === decodeUmlauts(decodeURIComponent(city)).toLowerCase()
  )

  if (!cityName) {
    return Response.json({ error: 'city_not_found' }, { status: 404 })
  }

  return new Response(JSON.stringify({ city: cityName, lang, country }))
}
