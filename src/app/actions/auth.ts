// src/app/actions/auth.ts
'use server';

import { cookies } from 'next/headers'; // Importar la utilidad cookies de Next.js
import pb from '../lib/pocketbase';

export const handleAuthCallback = async (code: string) => {
  try {
    // Configurar cookies
    cookies().set('userName', name, { path: '/' });
    cookies().set('userEmail', email, { path: '/' });
    cookies().set('userToken', token, { path: '/' });
    cookies().set('userId', id, { path: '/' });

    return { success: true };
  } catch (e: any) {
    console.error(`Sign in failed: ${e.message}`);
    console.log(`Sign in failed: ${e.message}`);
  }
};
