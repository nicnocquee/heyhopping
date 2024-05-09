import { cookies } from 'next/headers'
import ComingSoon from './comingsoon'

export default function ComingSoonPage() {
  const city = cookies().get('city')?.value || 'your city'

  return <ComingSoon city={city} />
}
