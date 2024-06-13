import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
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

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/");
  };

  return user ? (
    <div className='max-container padding-container bg-yellow-300'>
      <div className='flexBetween'>
        <div>
          <h2>Welcome User.. </h2>
            {user.email}
          <p>You are logged in</p>
        </div>
        <div className=''>
          <Link href={'/'}>Go back Home</Link>
        </div>
        <div>
        <form action={signOut}>
        <button className="py-2 px-4 rounded-md no-underline bg-green-50 hover:bg-btn-background-hover">
          Logout
        </button>
      </form>
        </div>
      </div>
    </div>
  ) : (
    <Link
      href="/login"
      className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
    >
      Login
    </Link>

  )
}
