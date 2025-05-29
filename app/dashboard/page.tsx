'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) router.push('/login');
      else setUser(user);
    };
    checkUser();
  }, []);

  const addProfile = async () => {
    const { error } = await supabase.from('profiles').insert([{ id: user.id, username: 'testuser' }]);
    if (error) alert(error.message);
    else alert('Profile added');
  };

  return (
    <div className="p-8">
      <h1 className="text-xl mb-4">Welcome, {user?.email}</h1>
      <button onClick={addProfile} className="bg-purple-500 text-white px-4 py-2">Create Profile</button>
    </div>
  );
}