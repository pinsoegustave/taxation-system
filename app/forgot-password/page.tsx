import Link from 'next/link';
import React from 'react'

export default function forgotPassword({
    searchParams,
}: {
    searchParams: { message: string };
}) {
  return (
    <div className=''>
        <Link href='/' className='py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg'>Home</Link>

        <div className='w-full px-8 sm:max-w-md mx-auto mt-4'>
            <form action="" className='animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground'>
                <label htmlFor="email" className='text-md'>
                    Enter Email Address
                </label>
                <input type="text" className='rounded-md px-4 py-2 bg-inherit border mb-6' />

                <button className='bg-indigo-700 rounded-md px-4 py-2 text-foreground mb-2'>
                    Confirm
                </button>

                { searchParams?.message && ( 
                    <p className='mt-4 p-4 bg-foreground/10 text-foreground text-center'>
                        {searchParams.message}
                    </p>
                )}
            </form>

            <Link href="/login"
            className='rounded-md no-underline text-foreground text-sm'>Remember your password? Sign in</Link>
        </div>
    </div>
  )
}
