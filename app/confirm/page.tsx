import React from 'react'

export default function signup({
    searchParams,
}: {
    searchParams: { message: string };
}) {
  return (
    <div className='w-full px-8 h-[16.5vw] flexCenter mx-auto py-32 bg-green-50'>
        <p className='bold-20 text-foreground'>{searchParams.message}</p>
    </div>
  )
}
