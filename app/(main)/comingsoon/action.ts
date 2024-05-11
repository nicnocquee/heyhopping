import { headers } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { env } from '@/app/env'

export type SignUpResult = {
  error: {
    message: string
    email: string
  } | null
  data: string | null
}

export const signUp = async (formData: { email: string; recaptchaToken: string }) => {
  const origin = headers().get('origin')
  const { email, recaptchaToken } = formData
  const password = Math.random().toString(36).slice(-8)

  if (!recaptchaToken) {
    return {
      error: { message: `Recaptcha is required. Please refresh the page and try again.`, email },
      data: null,
    }
  }

  const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
  })

  const recaptchaData = await recaptchaResponse.json()

  if (!recaptchaData.success) {
    return {
      error: { message: `Invalid recaptcha token. Please refresh the page and try again.`, email },
      data: null,
    }
  }

  const supabase = createClient()

  const { error, data } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/comingsoon/complete`,
    },
  })

  const message = error?.message
    ? error?.code === 'user_already_exists'
      ? error?.code
      : error.message
    : null

  return { error: { message, email }, data: data?.user?.id || null }
}
