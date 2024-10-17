'use client'

import { CldUploadWidget } from 'next-cloudinary';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

export default function UploadButton() {
  const router = useRouter();

  const handleUploadSuccess = useCallback((result) => {
    const { public_id } = result.info;

    router.push(`/results?id=${public_id}`);
  }, [router]);

  const handleUploadAdded = useCallback((file, { widget }) => {
    const { close } = widget;
    const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/webp'];
    if (!allowedTypes.includes(file.info.file.type)) {
      alert('Solo se permiten archivos de imagen (PNG, JPG, JPEG, WEBP).');
      close();
      return false;
    }
  }, []);

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
          accept: 'image/png, image/jpg, image/jpeg, image/webp'
        }}
        onSuccess={handleUploadSuccess}
        onUploadAdded={handleUploadAdded}
      >
        {({ open }) => {
          const handleClick = (e) => {
            e.preventDefault();
            open();
          };

          return (
            <button 
              className='bg-green-500 text-darkgrey font-semibold py-2 pb-3 px-4 rounded-3xl border-b-[4px] hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] border-b-green-700 active:translate-y-[2px] hover:shadow-xl active:shadow-none transition-all'
              onClick={handleClick}
            >
              Create your spooky avatar
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
}
