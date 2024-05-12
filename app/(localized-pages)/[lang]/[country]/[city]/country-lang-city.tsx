export default function CountryLangCity({
  country,
  lang,
  city,
}: {
  country: string
  lang: string
  city: string
}) {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center space-y-4 text-xl">
      <p>Country Lang City</p>
    </div>
  )
}
