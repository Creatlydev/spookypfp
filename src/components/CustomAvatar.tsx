'use client';

import React from 'react';
import Button from './Button';
import { Refresh } from './Icons';

interface CustomAvatarProps {
  rounded: boolean;
  disabled: boolean;
  setRounded: (value: boolean | ((prev: boolean) => boolean)) => void;
  updatePrompts: () => void;
}

const CustomAvatar: React.FC<CustomAvatarProps> = ({ rounded, setRounded, updatePrompts, disabled }) => {
  return (
    <section className='flex flex-col items-center justify-center gap-4 h-16'>
      <div>
        <Button
          disabled={disabled}
          onClick={updatePrompts}
        >
          <Refresh width={24} height={24} />
          <span>Regenerate</span>
        </Button>
      </div>
      <div>
        <Button
          disabled={disabled}
          onClick={() => setRounded((prev) => !prev)}
        >
          {rounded ? 'Square' : 'Rounded'}
        </Button>
      </div>
    </section>
  );
};

export default CustomAvatar;
