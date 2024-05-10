import Link from 'next/link'
import { Button } from './ui/button'

export const GettingStarted = () => {
  return (
    <Button asChild className="self-center px-6 py-8 text-2xl">
      <Link href="/comingsoon">Get Started</Link>
    </Button>
  )
}
