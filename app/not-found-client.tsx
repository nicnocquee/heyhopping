'use client'

import { matchPattern } from 'url-matcher'
import { usePathname } from 'next/navigation'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function NotFoundClient() {
  const pathname = usePathname()

  const matches = matchPattern('/:country/:lang/:city', pathname)

  if (!matches) {
    return <div>Page not found</div>
  }

  const [countryParam, langParam, cityParam] = matches.paramNames

  if (!countryParam && !langParam && !cityParam) {
    return <div>Page not found</div>
  }

  const [country, lang, city] = matches.paramValues

  return (
    <QueryClientProvider client={queryClient}>
      <NotFoundClientFetch country={country} lang={lang} city={city} />
    </QueryClientProvider>
  )
}

const NotFoundClientFetch = ({
  country,
  lang,
  city,
}: {
  country: string
  lang: string
  city: string
}) => {
  const { data, isPending } = useQuery({
    queryKey: [country, lang, city],
    queryFn: async () => {
      const res = await fetch(`/${country}/${lang}/${city}/api`)
      return await res.json()
    },
  })

  if (isPending) {
    return <div>Loading...</div>
  }

  if (data?.error === 'country_not_found') {
    return <div>Country with param {country} not found</div>
  }

  if (data?.error === 'city_not_found') {
    return <div>City with name {city} not found</div>
  }

  return <div>Page not found</div>
}
