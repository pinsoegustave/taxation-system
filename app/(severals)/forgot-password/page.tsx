import { createClient } from '@/utils/supabase/server';
import { headers } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

export default function forgotPassword({
    searchParams,
}: {
    searchParams: { message: string };
}) {

    const confirmReset = async (formData: FormData) => {
        "use server";

        const origin = headers().get('origin');
        const email = formData.get('email') as string; 

        const supabase = createClient();

        const { error } = await supabase.auth.resetPasswordForEmail( email, { redirectTo: `${origin}/reset-password`});

        if (error) {
            redirect('/forgot-password?message=Could not authenticate the user');
        }

        return redirect('/confirm?message=Password Reset link has been sent to your email address');
    };

  return (
    <div className=''>
        <div className='w-full px-8 sm:max-w-md mx-auto mt-4 py-8'>
            <form action={confirmReset} className='animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground'>
                <label htmlFor="email" className='text-md'>
                    Enter Email Address
                </label>
                <input 
                type="text" 
                name='email'
                required
                className='rounded-md px-4 py-2 bg-inherit border mb-6' />

                <button className='bg-indigo-700 rounded-md px-4 py-2 text-foreground mb-2 hover:text-white'>
                    Confirm
                </button>

                { searchParams?.message && ( 
                    <p className='mt-4 p-4 bg-red-400 text-foreground text-red-500 text-center'>
                        {searchParams.message}
                    </p>
                )}
            </form>

            <Link href="/login"
            className='rounded-md no-underline text-foreground text-sm'>Remember your password?<span className='text-blue-400 '>Sign in</span> </Link>
        </div>
    </div>
  )
}
