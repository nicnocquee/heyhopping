import Image from 'next/image'
import Hero from '@/public/hero.webp'

export default function Header() {
  return (
    <div className="flex w-full flex-col items-center gap-16">
      <div className="relative flex h-2/3 w-full">
        <Image
          loading="eager"
          priority
          alt="Heyhopping"
          className="z-0 h-full w-full brightness-50"
          src={Hero}
          quality={100}
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center space-y-4 text-center text-yellow-400">
          <h1 className="text-xl font-extrabold sm:text-8xl">
            Decide the venue
            <br />
            then pick a company
          </h1>
          <p className="text-md mx-auto max-w-xl text-center !leading-tight sm:text-2xl">
            From restaurants to concerts, make every outing memorable by meeting new friends!
          </p>
        </div>
      </div>
    </div>
  )
}
