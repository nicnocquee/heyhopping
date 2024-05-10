'use client'

import { matchPattern } from 'url-matcher'
import { usePathname } from 'next/navigation'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const queryClient = new QueryClient()

export default function NotFoundClient() {
  const pathname = usePathname()

  const matches = matchPattern('/:country/:lang/:city', pathname)

  if (!matches) {
    return (
      <Common>
        <p>Page not found</p>
      </Common>
    )
  }

  const [countryParam, langParam, cityParam] = matches.paramNames

  if (!countryParam && !langParam && !cityParam) {
    return (
      <Common>
        <p>Page not found</p>
      </Common>
    )
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
    return (
      <Common>
        <p>
          Country with code <strong>{country}</strong> not found
        </p>
      </Common>
    )
  }

  if (data?.error === 'city_not_found') {
    return (
      <Common>
        <p>
          City with name <strong>{city}</strong> not found
        </p>
      </Common>
    )
  }

  return (
    <Common>
      <p>Page not found</p>
    </Common>
  )
}

const Common = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      {children}
      <Button>
        <Link href={'/'}>Back to home</Link>
      </Button>
    </div>
  )
}
