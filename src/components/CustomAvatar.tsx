'use client';

import React from 'react';
import Button from './Button';
import { Refresh } from './Icons';
import { VERSION } from '@/consts';

interface CustomAvatarProps {
  rounded: boolean;
  disabled: boolean;
  setRounded: (value: boolean | ((prev: boolean) => boolean)) => void;
  updatePrompts: () => void;
  error?: boolean
  changeVersion: (version: string) => void
}

const CustomAvatar: React.FC<CustomAvatarProps> = ({ rounded, changeVersion, setRounded, updatePrompts, disabled, error }) => {
  return (
    <section className='flex flex-col items-center justify-center gap-4 w-full'>
      <div>
        <Button
          disabled={disabled}
          onClick={updatePrompts}
          className={`${error ? 'animate-bounce' : ''}`}
        >
          <Refresh className={`${disabled ? 'animate-spin' : ''}`} width={24} height={24} />
          <span>Regenerate</span>
        </Button>
      </div>
      <div className='flex items-center justify-center gap-3 flex-wrap w-full text-nowrap'>
        <button
          className={`flex-grow basis-32 max-w-36 flex-shrink-0 text-sm bg-primary p-2 px-3 rounded-[100vh] active:scale-90 transition-transform border-b-4 border-b-orange-900 hover:border-none ${disabled || error ? 'border-none bg-orange-900 pointer-events-none' : ''}`}
          disabled={disabled || error}
          onClick={() => setRounded((prev) => !prev)}
        >
          {rounded ? 'Square' : 'Rounded'}
        </button>

        <button
          className={`flex-grow basis-32 max-w-36 flex-shrink-0 text-sm bg-primary p-2 px-3 rounded-[100vh] active:scale-90 transition-transform border-b-4 border-b-orange-900 hover:border-none ${disabled || error ? 'border-none bg-orange-900 pointer-events-none' : ''}`}
          onClick={() => changeVersion(VERSION.SKULL)}
        >
          Skull Version
        </button>

        <button
          className={`flex-grow basis-32 max-w-36 flex-shrink-0 text-sm bg-primary p-2 px-3 rounded-[100vh] active:scale-90 transition-transform border-b-4 border-b-orange-900 hover:border-none ${disabled || error ? 'border-none bg-orange-900 pointer-events-none' : ''}`}
          onClick={() => changeVersion(VERSION.POKEMON)}
        >
          Pokemon Version
        </button>
      </div>
    </section>
  );
};

export default CustomAvatar;
