'use client';

import React, { ReactNode } from 'react';

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  children: ReactNode
}

const Button: React.FC<ButtonProps> = ({ onClick = () => {}, children }) => {
  return (
    <button 
      className='bg-green-500 text-darkgrey font-semibold py-2 pb-3 px-6 rounded-3xl border-b-[4px] hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] border-b-green-700 active:translate-y-[2px] hover:shadow-xl active:shadow-none transition-all'
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
