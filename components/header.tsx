import { SupportedLanguage } from '@/app/.locales/generated/locales'
import { IndexHeader } from '@/app/.locales/generated/locales-markdown'
import { cn } from '@/lib/utils'
import Image, { ImageProps } from 'next/image'

export default function Header({
  children,
  image,
  imageContainerClassName,
}: {
  children: React.ReactNode
  image: ImageProps['src']
  imageContainerClassName?: string
}) {
  return (
    <div className="flex w-full flex-col items-center gap-16">
      <div className={cn('relative flex h-2/3 w-full', imageContainerClassName)}>
        <Image
          loading="eager"
          priority
          alt="Heyhopping"
          className="z-0 h-full w-full brightness-50"
          src={image}
          quality={100}
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center space-y-4 text-center text-yellow-400">
          {children}
        </div>
      </div>
    </div>
  )
}

export const HeaderChild = ({ lang }: { lang: string }) => {
  return (
    <div className="[&_p]:text-md space-y-4 px-4 sm:px-0 [&_h1]:text-4xl [&_h1]:font-extrabold [&_h1]:sm:text-8xl [&_p]:mx-auto [&_p]:max-w-xl [&_p]:text-center [&_p]:!leading-tight [&_p]:sm:text-2xl">
      <IndexHeader lang={lang as SupportedLanguage} />
    </div>
  )
}
