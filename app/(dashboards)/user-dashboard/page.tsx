import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function userDashPage() {

    const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className='bg-yellow-300'>Welcome User.. You are logged in</div>
  )
}
