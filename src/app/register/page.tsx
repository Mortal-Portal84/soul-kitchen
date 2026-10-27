'use client'

import { type FC, FormEvent, useState } from 'react'
import { User } from "../models/User"
import FormInput from "@/app/ui/input"
import Button from "@/app/ui/button"
import { registerUser } from "@/app/lib/actions"
import { useRouter } from "next/navigation"
import Link from "next/link"

const initialUser: Omit<User, "id" | 'registered'> = {
  name: '',
  email: '',
  password: '',
}

const RegisterPage: FC = () => {
  const [user, setUser] = useState<Omit<User, "id" | 'registered'>>(initialUser)
  const [error, setError] = useState<string | null>(null) // для вывода ошибок на экран
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleUserData = (payload: Partial<User>) => {
    setUser(prevUser => ({...prevUser, ...payload}))
  }

  const handleRegisterUser = async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    // Вызываем серверную функцию прямо как обычную утилиту!
    const result = await registerUser(user)
    setIsLoading(false)

    if (result.success) {
      alert('Вы успешно зарегистрировались!')
      router.push('/login')
      // Здесь можно сделать редирект, например: router.push('/login')
    } else {
      setError(result.error || 'Что-то пошло не так')
    }
  }

  return (
    <>
      <form onSubmit={handleRegisterUser}>
        <FormInput
          label="Имя"
          value={user.name}
          onChange={(e) => handleUserData({name: e.target.value})}
          required
        />

        <FormInput
          label="Email"
          value={user.email}
          type="email"
          onChange={(e) => handleUserData({email: e.target.value})}
          required
        />

        <FormInput
          label="Пароль"
          value={user.password}
          type="password"
          onChange={(e) => handleUserData({password: e.target.value})}
          required
          minLength={6}
        />

        {error && <div style={{ color: 'red' }}>{error}</div>}

        <Link href="/login">
          <Button>Войти</Button>
        </Link>

        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
        </Button>
      </form>
    </>
  )
}

export default RegisterPage