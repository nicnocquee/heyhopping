'use client'

import { ReCaptchaProvider, useReCaptcha } from 'next-recaptcha-v3'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { QueryClient, QueryClientProvider, useMutation } from '@tanstack/react-query'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { SignUpResult } from './action'
import { env } from '@/app/env'

const queryClient = new QueryClient()

export default function ComingSoonContainer({ city }: { city: string }) {
  return (
    <ReCaptchaProvider reCaptchaKey={env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
      <QueryClientProvider client={queryClient}>
        <ComingSoon city={city} />
      </QueryClientProvider>
    </ReCaptchaProvider>
  )
}

const submit = async ({
  email,
  recaptchaToken,
  resend,
}: {
  email: string
  recaptchaToken: string
  resend: boolean
}) => {
  const response = await fetch(`/comingsoon/submit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      resend,
      email,
      recaptchaToken,
    }),
  })
  const result = (await response.json()) as SignUpResult

  return result
}

export function ComingSoon({ city }: { city: string }) {
  const { executeRecaptcha } = useReCaptcha()

  const { mutate, isPending, isSuccess, data } = useMutation({
    mutationFn: submit,
    mutationKey: ['comingsoon'],
  })

  const isError = data?.error?.message
  const error = isError ? data?.error : undefined

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center space-y-4 ">
      {isError && error && (
        <div className="w-full max-w-sm">
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              <div className="space-y-2">
                <p>
                  {error.message === 'user_already_exists' ? 'Email already exists' : error.message}
                </p>
                {error.message === 'user_already_exists' ? (
                  <Button
                    disabled={isPending}
                    variant={'outline'}
                    onClick={async () => {
                      const token = await executeRecaptcha('form_submit')
                      mutate({
                        resend: true,
                        email: error.email,
                        recaptchaToken: token,
                      })
                    }}
                  >
                    Resend confirmation
                  </Button>
                ) : null}
              </div>
            </AlertDescription>
          </Alert>
        </div>
      )}

      {!isSuccess && (
        <form
          onSubmit={async (event) => {
            event.preventDefault()
            const formData = new FormData(event.target as HTMLFormElement)
            const token = await executeRecaptcha('form_submit')
            mutate({
              resend: false,
              email: formData.get('email') as string,
              recaptchaToken: token,
            })
          }}
        >
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Coming Soon</CardTitle>
              <CardDescription>
                {`Enter your email below to be notified when we launch in ${city}!`}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  disabled={isPending}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isPending} className="w-full">
                Submit
              </Button>
            </CardFooter>
          </Card>
        </form>
      )}

      {isSuccess && !isError ? (
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Finish your submission</CardTitle>
            <CardDescription>
              We've sent you an email with a link to finish your submission. Please check your inbox
              and follow the instructions.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4"></CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href={'/'}>Back to home</Link>
            </Button>
          </CardFooter>
        </Card>
      ) : null}
    </div>
  )
}
