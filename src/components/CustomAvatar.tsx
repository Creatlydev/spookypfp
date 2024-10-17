'use client';

import React from 'react';
import Dropdown from './Dropdown';

interface CustomAvatarProps {
  rounded: string;
  setRounded: (value: string) => void;
  updatePrompts: () => void;
}

const options = [
  { label: 'Round', value: 'max' },
  { label: 'Square', value: '0' },
  { label: 'Round corners', value: '25' },
  { label: 'Extra rounded', value: '50' },
];

const CustomAvatar: React.FC<CustomAvatarProps> = ({ rounded, setRounded, updatePrompts }) => {
  return (
    <section className='flex items-center justify-center space-x-4'>
      <Dropdown
        options={options}
        selectedValue={rounded}
        onSelect={setRounded}
      />

      <button
        className="bg-primary text-white py-2 px-4 rounded-lg"
        onClick={updatePrompts}
      >
        Regenerate
      </button>
    </section>
  );
};

export default CustomAvatar;
