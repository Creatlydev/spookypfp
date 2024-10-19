'use client';

import { CldUploadWidget } from 'next-cloudinary';
import React, { ReactNode } from 'react';
import Button from './Button';
import { useUploadHandlers } from '@/hooks/useUploadHandlers';
import Image from 'next/image';
import logoImg from '@/public/logo.png'


interface UploadResult {
  info: {
    public_id: string;
  };
}

interface UploadFile {
  info : {
    file: {
      type: string;
    };
  }
}

export default function UploadButton({children}: {children: ReactNode}) {
  const { handleUploadSuccess, handleUploadAdded } = useUploadHandlers();

  return (
    <div className='mt-10'>
      <CldUploadWidget
        uploadPreset='spooky_pfp'
        options={{
          maxFiles: 1,
          multiple: false,
          sources: ['local'],
          resourceType: 'image',
          clientAllowedFormats: ['png', 'jpg', 'jpeg', 'webp'],          
        }}
        onSuccess={(result) => handleUploadSuccess(result as UploadResult)}
        onUploadAdded={(file, {widget}) => handleUploadAdded(file as unknown as UploadFile, {widget})}
        onError={() => alert('Error an ocurred')}
      >
        {({ open }) => {
          const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            open();
          };

          return (
            <Button onClick={handleClick}>
              <Image className='h-8 w-8 flex-shrink-0' src={logoImg} alt="logo image" />
              {children}
            </Button>
          )
        }}
      </CldUploadWidget>
    </div>
  );
}
