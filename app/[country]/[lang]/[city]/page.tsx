import { getCitiesByCountry } from '@/utils/search-cities'

const supportedCountries = [
  {
    code: 'ch',
    name: 'Switzerland',
    languages: ['de', 'fr', 'it', 'en'],
  },
]

const findSupportedCountry = (countryCode: string) =>
  supportedCountries.find((country) => country.code.toLowerCase() === countryCode.toLowerCase())

const encodeUmlauts = (str: string) =>
  str
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/Ä/g, 'Ae')
    .replace(/Ö/g, 'Oe')
const decodeUmlauts = (str: string) =>
  str
    .replace(/ae/g, 'ä')
    .replace(/oe/g, 'ö')
    .replace(/ue/g, 'ü')
    .replace(/Ae/g, 'Ä')
    .replace(/Oe/g, 'Ö')

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

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
