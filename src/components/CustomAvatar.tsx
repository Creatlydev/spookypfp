'use client';

import React from 'react';

interface CustomAvatarProps {
  rounded: string;
  setRounded: (value: string) => void;
  updatePrompts: () => void;
}

const CustomAvatar: React.FC<CustomAvatarProps> = ({ rounded, setRounded, updatePrompts }) => {
  return (
    <section className='flex items-center justify-center'>
      <select name="rounded" value={rounded} onChange={(e) => setRounded(e.target.value)}>
        <option value="max">Round</option>
        <option value="0">Square</option>
        <option value="25">Round corners</option>
        <option value="50">Extra rounded</option>
      </select>

      <button onClick={updatePrompts}>
        regenerate
      </button>
    </section>
  );
};

export default CustomAvatar;
