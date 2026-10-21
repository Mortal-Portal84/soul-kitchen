import { type FC, Suspense } from 'react'
import { Metadata } from 'next'
import LoginForm from "@/app/ui/login-form"

export const metadata: Metadata = {
  title: 'Login',
}

const Page: FC = ({  }) => {

  return (
    <>
      <Suspense>
        <LoginForm />
      </Suspense>
    </>
  )
}

export default Page