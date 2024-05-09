import AuthButton from '../components/auth-button'
import Header from '@/components/header'
import Image from 'next/image'
import type { Metadata } from 'next'
import HeyhoppingLogo from '@/public/heyhopping-logo.webp'
import Heyhopping1 from '@/public/heyhopping-4.webp'
import Heyhopping2 from '@/public/heyhopping-2.jpg.webp'
import Heyhopping3 from '@/public/heyhopping-3.jpg.webp'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HeyHopping | Date, Chat, Meet New People & Mingle Without Pressure',
  description:
    'Heyhopping has sped up the process of finding new people and meeting new people. Choose where and when, then pick a company!',
  keywords: [
    'meet',
    'new',
    'people',
    'date',
    'chat',
    'meetup',
    'social',
    'networking',
    'events',
    'restaurant',
    'concert',
  ],
  openGraph: {
    title: 'HeyHopping | Date, Chat, Meet New People & Mingle Without Pressure',
    description:
      'Heyhopping has sped up the process of finding new people and meeting new people. Choose where and when, then pick a company!',
    url: 'https://www.heyhopping.com',
    images: [
      {
        url: `https://www.heyhopping.com/screenshots/index.webp`,
        width: 1200,
        height: 630,
        alt: 'Heyhopping',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HeyHopping | Date, Chat, Meet New People & Mingle Without Pressure',
    description:
      'Heyhopping has sped up the process of finding new people and meeting new people. Choose where and when, then pick a company!',
    images: [
      {
        url: `https://www.heyhopping.com/screenshots/index.webp`,
        width: 1200,
        height: 630,
        alt: 'Heyhopping',
      },
    ],
  },
}

export default async function Index() {
  return (
    <div className="flex w-full flex-1 flex-col items-center">
      <nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
        <div className="flex w-full max-w-6xl items-center justify-between p-3 text-sm">
          <Image alt="Heyhopping" src={HeyhoppingLogo} width={50} height={50} />
          <Link
            href="/comingsoon"
            className="bg-btn-background hover:bg-btn-background-hover flex rounded-md px-3 py-2 no-underline"
          >
            Get Started
          </Link>
        </div>
      </nav>

      <Header />

      <div className="flex w-full flex-1 flex-col gap-20 duration-500 fade-in zoom-in">
        <main className="flex w-full flex-1 flex-col items-stretch">
          <section className="w-full bg-yellow-300 px-4 py-28 sm:px-0">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-4">
              <div className="space-y-8 pr-10 text-lg sm:col-span-2 sm:text-2xl">
                <h2 className="mb-4 text-2xl font-bold sm:text-7xl">
                  More Connection, Less Screen Time
                </h2>
                <p className="text-lg sm:text-xl">
                  Break away from traditional networking apps that keep you online, crafting the
                  perfect profile and endlessly browsing others.
                </p>
                <p>
                  <strong>
                    With Heyhopping, start your social journey in the real world by choosing a venue
                    or event that excites you.
                  </strong>{' '}
                  Whether it's a local coffee shop, a live concert, or a spontaneous meetup at an
                  art exhibition, just choose a place and find company interested in joining.
                </p>
              </div>
              <div className="sm:col-span-2">
                <div className="relative h-full w-full overflow-clip rounded-md shadow-md">
                  <Image
                    alt="Heyhopping"
                    src={Heyhopping1}
                    className="z-0 h-full w-full"
                    quality={100}
                    sizes="100vw"
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="w-full bg-white">
            <div className="mx-auto max-w-6xl space-y-8 py-20 text-center text-slate-600">
              <p className="text-3xl">
                Heyhopping simplifies meeting up so you can get to know each other in person, right
                away.
              </p>
              <GettingStarted />
            </div>
          </section>

          <section className="w-full bg-white sm:hidden">
            <div className="relative flex h-1/3 w-full">
              <Image
                alt="Heyhopping"
                className="z-0 h-full w-full brightness-50"
                src={Heyhopping2}
                quality={100}
                sizes="100vw"
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
            <div className="mx-auto flex flex-col justify-center space-y-4 p-4">
              <h2 className="mb-4 text-4xl font-bold sm:text-7xl">Discover Without Pressure</h2>
              <p className="text-lg">
                Skip the stress of perfecting your profile and finding the right words to break the
                ice.
              </p>
              <p className="text-lg">
                <strong>Heyhopping introduces a natural starting point: the venue.</strong> Whether
                you're eager to try out a new gourmet spot, or curious about the latest art exhibit,
                Heyhopping creates opportunities to meet based on shared interests in specific
                events or locations.
              </p>
              <p className="text-lg">
                This common ground eases the initial conversation, allowing you to focus on enjoying
                the experience and making meaningful connections.
              </p>
              <GettingStarted />
            </div>
          </section>

          <section className="hidden w-full bg-white sm:block">
            <div className="relative flex h-1/3 w-full">
              <Image
                alt="Heyhopping"
                className="z-0 h-full w-full brightness-50"
                src={Heyhopping2}
                quality={100}
                sizes="100vw"
                style={{
                  objectFit: 'cover',
                }}
              />
              <div className="z-10 mx-auto flex flex-col justify-center space-y-4 text-yellow-400 sm:absolute sm:inset-0 sm:max-w-4xl sm:text-right">
                <h2 className="mb-4 text-2xl font-bold sm:text-7xl">Discover Without Pressure</h2>
                <p className="text-2xl">
                  Skip the stress of perfecting your profile and finding the right words to break
                  the ice.
                </p>
                <p className="py-10 text-4xl">
                  <strong>Heyhopping introduces a natural starting point: the venue.</strong>{' '}
                  Whether you're eager to try out a new gourmet spot, or curious about the latest
                  art exhibit, Heyhopping creates opportunities to meet based on shared interests in
                  specific events or locations.
                </p>
                <p className="pb-6 text-2xl">
                  This common ground eases the initial conversation, allowing you to focus on
                  enjoying the experience and making meaningful connections.
                </p>
                <GettingStarted />
              </div>
            </div>
          </section>

          <section className="w-full bg-yellow-300 px-4 py-28 sm:px-0">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-4">
              <div className="space-y-8 pr-10 text-2xl sm:col-span-2">
                <h2 className="mb-4 text-4xl font-bold sm:text-7xl">More Than Just Dates</h2>
                <p className="text-lg sm:text-xl">
                  Heyhopping is not just another dating app. It's a platform for anyone interested
                  in making new friends, exploring shared interests, or simply enjoying company at
                  an event.
                </p>
                <p>
                  Whether you want to explore culinary delights, appreciate art, sweat it out in a
                  gym class, or groove at a concert,{' '}
                  <strong>
                    Heyhopping is about finding the right company to enrich your experiences.
                  </strong>
                </p>
                <p className="text-lg sm:text-xl">
                  Make connections that might flourish into friendships, networking opportunities,
                  or simply great social interactions,{' '}
                  <strong>without the labels or expectations of traditional dating apps.</strong>
                </p>
              </div>
              <div className="sm:col-span-2">
                <div className="relative flex h-full w-full flex-col justify-center overflow-clip ">
                  <Image
                    alt="Heyhopping"
                    src={Heyhopping3}
                    quality={100}
                    className="rounded-md shadow-md"
                    sizes="100vw"
                    style={{
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="w-full bg-white">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-center space-y-8 py-20 text-center text-slate-600">
              <Image alt="Heyhopping" src={HeyhoppingLogo} width={200} height={200} />
              <GettingStarted />
            </div>
          </section>
        </main>
      </div>

      <footer className="flex w-full justify-center space-x-4 border-t border-t-foreground/10 p-8 text-center text-xs">
        <p>Made in Switzerland</p>
        <p>
          <a href="mailto:hi@heyhopping.com">Contact</a>
        </p>
      </footer>
    </div>
  )
}

const GettingStarted = () => {
  return (
    <Button asChild className="self-center px-6 py-8 text-2xl">
      <Link href="/comingsoon">Get Started</Link>
    </Button>
  )
}
