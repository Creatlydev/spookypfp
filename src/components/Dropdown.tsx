// CustomDropdown.tsx
'use client';

import React, { useState } from 'react';
import { ArrowDown } from './Icons';

interface DropdownOption {
  label: string;
  value: string;
}

interface CustomDropdownProps {
  options: DropdownOption[];
  selectedValue: string;
  onSelect: (value: string) => void;
}

export default function Dropdown ({ options, selectedValue, onSelect }: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="bg-primary py-2 px-4 rounded-lg flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedValue}
        <ArrowDown />
      </button>
      {isOpen && (
        <ul className="absolute mt-2 bg-primary shadow-lg rounded-lg py-2 z-10 w-max">
          {options.map((option) => (
            <li
              key={option.value}
              className="px-4 py-2 cursor-pointer"
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
