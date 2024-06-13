import Link from 'next/link';
import React from 'react'
import { SubmitButton } from './submit-button';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function ResetPassword ({
    searchParams,
}: {
    searchParams: {message: string, code: string};
}) {

  const resetPassword = async (formData: FormData) => {
    "use server";

    const password = formData.get('password') as string;
    const supabase = createClient();


    if (searchParams.code) {
      const { error } = await supabase.auth.exchangeCodeForSession(
        searchParams.code
      );
    
    if (error) {
      return redirect(`/reset-password?message=Unable to reset password. Link expired!`);
    };
  }

    const { error } = await supabase.auth.updateUser({
      password,   
    });
    
    if (error) {
      return redirect(`/reset-password?message=Unable to reset Password. Try Again!`);
    }

    return redirect(`/login?message=Your Password has been reset successfully. Sign in.`);

  };

  return (
    <div className='max-conatiner padding-container py-10'>
      <div className='w-full px-8 sm:max-w-md mx-auto mt-4'>
      <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
        <label className="text-md" htmlFor="email">
          New Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="••••••••"
          required
        />
        <label className="text-md" htmlFor="password">
          Confirm Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <SubmitButton
          formAction={resetPassword}
          className="bg-indigo-500 text-white rounded-md px-4 py-2 text-foreground mb-2 hover:text-black"
          pendingText="Signing In..."
        >
          Confirm New Password
        </SubmitButton>
        {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {searchParams.message}
          </p>
        )}
      </form>
      </div>
    </div>

  )
}
