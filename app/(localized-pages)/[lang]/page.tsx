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
import { cn } from '@/lib/utils'
import {
  SupportedLanguage,
  getStarted,
  howItWorks,
  simplifyMeeting,
} from '@/locales/.generated/locales'
import {
  IndexHowto1,
  IndexHowto2,
  IndexHowto3,
  IndexSection1,
  IndexSection2,
  IndexSection3,
} from '@/locales/.generated/locales-markdown'

export const metadata: Metadata = {
  title: 'HeyHopping | Date, Chat, Meet New People & Mingle Without Pressure',
  description:
    "Heyhopping speeds up the process of finding new people and meeting new people. Choose where and when, then pick a company! It's not like other meet up application!",
  keywords: [
    'meetup application',
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
    'stranger meetup',
  ],
  openGraph: {
    title: 'HeyHopping | Date, Chat, Meet New People & Mingle Without Pressure',
    description:
      "Heyhopping speeds up the process of finding new people and meeting new people. Choose where and when, then pick a company! It's not like other meet up application!",
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
      "Heyhopping speeds up the process of finding new people and meeting new people. Choose where and when, then pick a company! It's not like other meet up application!",
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

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'de' }, { lang: 'fr' }, { lang: 'it' }]
}

export default async function Index({ params }: { params: { lang?: string } }) {
  const langToUse = (params?.lang || 'en') as SupportedLanguage

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
              {getStarted(langToUse)}
            </Link>
          </div>
        </nav>
        <HeaderChild lang={langToUse} />
      </Header>

      <div className="flex w-full flex-1 flex-col gap-20 duration-500 fade-in zoom-in">
        <main className="flex w-full flex-1 flex-col items-stretch">
          <section className="w-full bg-yellow-300 px-4 py-12 sm:px-0 sm:py-28">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-4">
              <div className="space-y-8 text-lg sm:col-span-2 sm:pr-10 sm:text-2xl">
                <Section1Content lang={langToUse} />
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
              <h2 className="mb-4 text-2xl font-bold sm:text-7xl">{howItWorks(langToUse)}</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <HowToItem1 lang={langToUse} />
                <HowToItem2 lang={langToUse} />
                <HowToItem3 lang={langToUse} />
              </div>
              <p className="mx-auto max-w-md text-2xl italic">{simplifyMeeting(langToUse)}</p>
              <GettingStarted lang={langToUse} />
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
              <Section2Content lang={langToUse} />
              <GettingStarted lang={langToUse} />
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
                <Section2Content
                  lang={langToUse}
                  className="[&_h2]:sm:text-7x space-y-8 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_p]:text-2xl [&_p]:sm:text-3xl"
                />
                <GettingStarted lang={langToUse} />
              </div>
            </div>
          </section>

          <section className="w-full bg-yellow-300 px-4 py-28 sm:px-0">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-4">
              <div className="space-y-8 text-lg sm:col-span-2 sm:pr-10 sm:text-2xl">
                <Section3Content lang={langToUse} />
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
            <GettingStarted lang={langToUse} />
          </Header>
        </main>
      </div>
    </div>
  )
}

const Section1Content = ({ lang }: { lang: string }) => {
  return (
    <div className="space-y-4 [&_h2]:mb-4 [&_h2]:text-5xl [&_h2]:font-bold [&_h2]:sm:text-7xl [&_p]:text-lg [&_p]:sm:text-xl">
      <IndexSection1 lang={lang as SupportedLanguage} />
    </div>
  )
}

const Section2Content = ({ lang, className }: { lang: string; className?: string }) => {
  return (
    <div
      className={cn(
        'space-y-4 [&_h2]:mb-4 [&_h2]:text-5xl [&_h2]:font-bold [&_h2]:sm:text-7xl [&_p]:text-lg [&_p]:sm:text-xl',
        className
      )}
    >
      <IndexSection2 lang={lang as SupportedLanguage} />
    </div>
  )
}

const Section3Content = ({ lang }: { lang: string }) => {
  return (
    <div className="space-y-4 [&_h2]:mb-4 [&_h2]:text-5xl [&_h2]:font-bold [&_h2]:sm:text-7xl [&_p]:text-lg [&_p]:sm:text-xl">
      <IndexSection3 lang={lang as SupportedLanguage} />
    </div>
  )
}

const HowToItemContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center space-y-4 [&_h3]:text-xl [&_h3]:font-semibold">
      {children}
    </div>
  )
}

const HowToItem1 = ({ lang }: { lang: string }) => {
  return (
    <HowToItemContainer>
      <CalendarClock key={0} width={60} height={60} />
      <IndexHowto1 lang={lang as SupportedLanguage} />
    </HowToItemContainer>
  )
}

const HowToItem2 = ({ lang }: { lang: string }) => {
  return (
    <HowToItemContainer>
      <Users key={1} width={60} height={60} />
      <IndexHowto2 lang={lang as SupportedLanguage} />
    </HowToItemContainer>
  )
}

const HowToItem3 = ({ lang }: { lang: string }) => {
  return (
    <HowToItemContainer>
      <CircleCheckBig key={2} width={60} height={60} />
      <IndexHowto3 lang={lang as SupportedLanguage} />
    </HowToItemContainer>
  )
}
