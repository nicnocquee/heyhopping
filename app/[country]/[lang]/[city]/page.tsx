import { getCitiesByCountry } from '@/utils/search-cities'
import {
  supportedCountries,
  encodeUmlauts,
  findSupportedCountry,
  capitalize,
  decodeUmlauts,
} from './helpers'

export async function generateStaticParams() {
  const params = (
    await Promise.all(
      supportedCountries.flatMap(async (country) => {
        const cities = await getCitiesByCountry(country.name)
        return cities.flatMap((city) =>
          country.languages.map((lang) => ({
            country: country.code,
            lang,
            city: encodeURIComponent(encodeUmlauts(city)).toLowerCase(),
          }))
        )
      })
    )
  ).flat()

  return params
}

export const dynamicParams = false

export default function Page({
  params,
}: {
  params: { country: string; lang: string; city: string }
}) {
  const { country, lang, city } = params
  const countryName = findSupportedCountry(country)?.name

  if (!countryName) {
    return <div>Country not supported yet</div>
  }

  return (
    <div>
      Page for {countryName} {lang} {capitalize(decodeUmlauts(decodeURIComponent(city)))}
    </div>
  )
}
