import { headers } from 'next/headers'
import { signUp } from '../action'
import { createClient } from '@/utils/supabase/server'

export const POST = async (request: Request) => {
  const formData = await request.json()

  let result
  if (formData.resend) {
    const origin = headers().get('origin')

    const supabase = createClient()

    result = await supabase.auth.resend({
      type: 'signup',
      email: formData.email,
      options: {
        emailRedirectTo: `${origin}/comingsoon/complete`,
      },
    })
  } else {
    result = await signUp(formData)
  }

  return new Response(JSON.stringify(result), {
    status: result.error?.message ? 400 : 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
