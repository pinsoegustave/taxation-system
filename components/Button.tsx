import React from 'react'

type ButtonProps = {
    type: 'button'| 'submit';
    title: string;
    variant: string;
    full?: boolean;
}

const Button = ({ type, title, variant, full }: ButtonProps) => {
  return (
    <button 
    type={type}
    className={`flexCenter gap-3 rounded-sm ${variant} ${full && 'w-full'}`}
    >
        <label className='bold-16 whitespace-nowrap cursor-pointer'>{title}</label>
    </button>
  )
}

export default Button