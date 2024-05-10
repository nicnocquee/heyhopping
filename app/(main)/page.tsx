import Header, { HeaderChild } from '@/components/header'
import Image from 'next/image'
import type { Metadata } from 'next'
import HeyhoppingLogo from '@/public/heyhopping-logo.webp'
import Heyhopping1 from '@/public/heyhopping-4.webp'
import Heyhopping2 from '@/public/heyhopping-2.jpg.webp'
import Heyhopping3 from '@/public/heyhopping-3.jpg.webp'
import PeopleLaugh from '@/public/people-laugh.jpg.webp'
import Hero from '@/public/hero.webp'
import Link from 'next/link'
import { CalendarClock, Users, CircleCheckBig } from 'lucide-react'
import { GettingStarted } from '@/components/getting-started'

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
      <Header image={Hero} imageContainerClassName="h-[300px] sm:h-2/3">
        <nav className="absolute top-0 z-10 flex h-16 w-full justify-center border-b border-b-foreground/10 bg-transparent">
          <div className="flex w-full max-w-6xl items-center justify-between p-3 text-sm">
            <Image alt="Heyhopping" src={HeyhoppingLogo} width={40} height={40} />
            <Link
              href="/comingsoon"
              className="bg-btn-background hover:bg-btn-background-hover flex rounded-md px-3 py-2 font-semibold text-white no-underline"
            >
              Get Started
            </Link>
          </div>
        </nav>
        <HeaderChild />
      </Header>

      <div className="flex w-full flex-1 flex-col gap-20 duration-500 fade-in zoom-in">
        <main className="flex w-full flex-1 flex-col items-stretch">
          <section className="w-full bg-yellow-300 px-4 py-12 sm:px-0 sm:py-28">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-4">
              <div className="space-y-8 text-lg sm:col-span-2 sm:pr-10 sm:text-2xl">
                <h2 className="mb-4 text-5xl font-bold sm:text-7xl">
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
            <div className="mx-auto max-w-6xl space-y-12 px-4 py-20 text-center text-slate-600 sm:px-0">
              <h2 className="mb-4 text-2xl font-bold sm:text-7xl">How it works</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {[
                  [
                    <CalendarClock key={0} width={60} height={60} />,
                    'Pick a Spot and Time',
                    "Fancy checking out that new cafe everyone's talking about? Or maybe there's a cool art show or a live gig you don't want to miss? Start by setting up where and when you wanna go.",
                  ],
                  [
                    <Users key={1} width={60} height={60} />,
                    'Find Your Crowd',
                    'Hang tight while other Heyhopping folks who dig the same stuff as you hop on board your plan.',
                  ],
                  [
                    <CircleCheckBig key={2} width={60} height={60} />,
                    'Choose Your Adventure Buddy',
                    "Scroll through the profiles of interested peeps and select your plus-one. No group coordination needed — it's just the two of you, so it's all chill and no fuss.",
                  ],
                ].map(([Icon, title, description], index) => (
                  <div key={index} className="flex flex-col items-center space-y-4">
                    {Icon}
                    <p className="text-xl font-semibold">{title}</p>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
              <p className="mx-auto max-w-md text-2xl italic">
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
              <div className="space-y-8 text-2xl sm:col-span-2 sm:pr-10">
                <h2 className="mb-4 text-5xl font-bold sm:text-7xl">More Than Just Dates</h2>
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

          <Header image={PeopleLaugh} imageContainerClassName="h-[300px] sm:h-2/3">
            <Image
              alt="Heyhopping"
              src={HeyhoppingLogo}
              className="h-32 w-32 object-contain sm:h-[200px] sm:w-[200px]"
            />
            <GettingStarted />
          </Header>
        </main>
      </div>
    </div>
  )
}
