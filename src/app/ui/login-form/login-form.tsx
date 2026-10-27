'use client'

import { type FC, useActionState } from 'react'
import { useSearchParams } from "next/navigation"
import { authenticate } from "@/app/lib/actions"
import Button from "@/app/ui/button"
import FormInput from "@/app/ui/input"

import styles from './login-form.module.scss'

const LoginForm: FC = ({}) => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/recipes'
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  )

  return (
    <form action={formAction} className="">
      <FormInput label="Email 📧" placeholder="Введите ваш email" type="email" name="email" required/>

      <FormInput label="Пароль 🔑" placeholder="Введите ваш пароль" type="password" name="password" required/>

      <input type="hidden" name="redirectTo" value={callbackUrl}/>

      <Button type="submit" aria-disabled={isPending}>Войти</Button>

      {errorMessage && (
        <div className={styles.loginFormError}>
          <span className={styles.loginFormErrorIcon}>🛑</span>
          <p className={styles.loginFormErrorText}>{errorMessage}</p>
        </div>
      )}
    </form>
  )
}

export default LoginForm