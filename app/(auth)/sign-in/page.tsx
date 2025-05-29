'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (!error) {
      router.push("/dashboard")
    } else {
      alert(error.message)
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-xl mb-4">Login</h1>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border p-2 mb-2 w-full" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="border p-2 mb-4 w-full" />
      <div className="flex gap-2">
        <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2">Login</button>
      </div>
    </div>
  );
}
