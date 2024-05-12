import { Button } from '@/components/ui/button'

export default function CompletePage() {
  return (
    <div className="flex h-screen w-screen flex-1 flex-col items-center justify-center space-y-4 text-xl">
      <p>Your e-mail is verified. Thanks!</p>
      <Button asChild className="self-center px-6 py-8">
        <a href="https://twitter.com/intent/tweet?text=%F0%9F%94%A5%20Just%20entered%20Heyhopping%20wait%20list.%20Looks%20like%20a%20better%20alternative%20to%20dating%20apps%20to%20make%20new%20friends!%20%F0%9F%A4%94&url=https%3A%2F%2Fwww.heyhopping.com">
          Post to X (Twitter)
        </a>
      </Button>
    </div>
  )
}