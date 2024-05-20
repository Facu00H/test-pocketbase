// src/components/SignInButton.tsx
'use client';

import { useState } from 'react';
import pb from '../lib/pocketbase';



const SignInButton = () => {
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const asd = await pb.collection('users').authWithOAuth2({ provider: 'google' })
      console.log(asd);
      // Extraer la información del usuario de la respuesta
      const { meta, record, token } = authData;
      const { name, email, id } = meta;

      // Actualizar el registro del usuario con el nombre
      if (record && record.id) {
        await pb.collection('users').update(record.id, {
          name: name || '',
        });
      }
      
      return token;
    } catch (e: any) {
      console.error(`Sign in failed: ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form method="post" action={async() => {
      await handleSignIn()
    }}>
      <input name="token" type="hidden" />
      <button className="border rounded p-2 mt-10 bg-gray-800 text-white hover:bg-gray-700">
          Login using Google
      </button>
    </form>
  );
};

export default SignInButton;
