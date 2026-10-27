'use server'

import { signIn } from '@/auth'
import { AuthError } from 'next-auth'
import type { User } from "@/app/models/User"
import bcrypt from "bcrypt"
import postgres from "postgres"

const sql = postgres(process.env.SK_STORAGE_POSTGRES_URL!, { ssl: 'require' });

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData)
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials';
        default:
          return 'Something went wrong';
      }
    }
    throw error;
  }
}

export const registerUser = async (user: Omit<User, "id" | 'registered'>) => {
  try {
    // 1. Хешируем пароль (10 раундов соли — стандарт безопасности)
    const hashedPassword = await bcrypt.hash(user.password, 10);

    // 2. Делаем безопасную вставку в БД через теговый шаблон postgres.js
    // Библиотека автоматически экранирует параметры, SQL-инъекции невозможны.
    // Название таблицы укажите ваше (в примере ниже: users)
    const [newUser] = await sql`
      INSERT INTO users (name, email, password)
      VALUES (${user.name}, ${user.email}, ${hashedPassword})
      RETURNING id, name, email;
    `;

    return { success: true, user: newUser };

  } catch (error: any) {
    console.error("Ошибка регистрации пользователя:", error);

    // Перехватываем ошибку уникальности (если такой email уже есть в базе)
    if (error.code === '23505') {
      return { success: false, error: 'Пользователь с таким Email уже зарегистрирован' };
    }

    return { success: false, error: 'Произошла непредвиденная ошибка при регистрации' };
  }
}