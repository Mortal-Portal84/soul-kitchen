import { type FC } from 'react'
import { Metadata } from 'next'
import LoginForm from "@/app/ui/login-form"

export const metadata: Metadata = {
  title: 'Login',
}

const Page: FC = ({  }) => {

  return (
    <>
        <LoginForm/>
    </>
  )
}

export default Page