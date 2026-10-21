'use client'

import { type FC, useActionState } from 'react'
import { useSearchParams } from "next/navigation"
import { authenticate } from "@/app/lib/actions"
import Button from "@/app/ui/button"

import styles from './login-form.module.scss'

const LoginForm: FC = ({  }) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/recipes';
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  )
  
  return (
    <form action={formAction} className="">
      <div>
        <label
          className="mb-3 mt-5 block text-xs font-medium text-gray-900"
          htmlFor="email"
        >
          Email
        </label>
        <div className="relative">
          <input
            className=""
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
          />
          <span>📧</span>
        </div>
      </div>
      <div className="">
        <label
          className=""
          htmlFor="password"
        >
          Password
        </label>
        <div className="">
          <input
            className=""
            id="password"
            type="password"
            name="password"
            placeholder="Enter password"
            required
            minLength={6}
          />
          <span>🔑</span>
        </div>
      </div>
      <input type="hidden" name="redirectTo" value={callbackUrl} />
      <Button aria-disabled={isPending}>Войти</Button>
      <div className={styles.loginFormError}>
        <span className={styles.loginFormErrorIcon}>🛑</span>
        <p className={styles.loginFormErrorText}>{errorMessage}</p>
      </div>
    </form>
  )
}

export default LoginForm