'use client';

import { CldUploadWidget } from 'next-cloudinary';
import React from 'react';
import Button from './Button';
import { useUploadHandlers } from '@/hooks/useUploadHandlers';

export default function UploadButton() {
  const { handleUploadSuccess, handleUploadAdded } = useUploadHandlers();

  return (
    <div className='mt-10'>
      <CldUploadWidget
        uploadPreset='unsigned-images'
        options={{
          maxFiles: 1,
          multiple: false,
          sources: ['local'],
          resourceType: 'image',
          clientAllowedFormats: ['png', 'jpg', 'jpeg', 'webp'],
        }}
        onSuccess={handleUploadSuccess}
        onUploadAdded={handleUploadAdded}
      >
        {({ open }) => {
          const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            open();
          };

          return (
            <Button onClick={handleClick}>
              Create your spooky avatar
            </Button>
          )
        }}
      </CldUploadWidget>
    </div>
  );
}
