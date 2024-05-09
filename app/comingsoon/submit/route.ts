import { signUp } from '../action'
import { createClient } from '@/utils/supabase/server'

export const POST = async (request: Request) => {
  const formData = await request.json()

  let result
  if (formData.resend) {
    const supabase = createClient()

    result = await supabase.auth.resend({
      type: 'signup',
      email: formData.email,
    })
  } else {
    result = await signUp(formData)
  }

  console.log(result)

  return new Response(JSON.stringify(result), {
    status: result.error?.message ? 400 : 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
