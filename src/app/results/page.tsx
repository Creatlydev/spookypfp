'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import SpookyAvatar from '@/components/SpookyAvatar';
import logoImg from '@/public/logo.png';
import Image from 'next/image';

export default function ResultsPage() {
  return (
    <Suspense fallback={<div className='text-3xl text-center md:text-5xl font-semibold font-[family-name:var(--spooky-outline)] grid place-content-center h-screen w-screen'>Uploading Photo...</div>}>
      <ResultsContent />
    </Suspense>
  );
}

function ResultsContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  if (!id) {
    return <div>No image data available.</div>;
  }

  return (
    <div className='overflow-hidden flex flex-col gap-8 h-[calc(100vh-3rem)] my-6 z-10
    shadow-box bg-[url(../public/hero-result.jpg)] bg-cover bg-center bg-no-repeat rounded-3xl bg-darkgrey/70 bg-blend-multiply'
    >

      <header className="relative z-10 flex w-full rounded-lg items-center justify-center mt-auto">
        <Link 
          className='bg-darkgrey/95 font-[family-name:var(--spooky-outline)] p-4 px-8 rounded-b-2xl border-b-4 border-gray-950 flex items-center gap-2 text-2xl'
          href={'/'}>
          <span>Spooky</span>
          <Image className='h-8 w-8 flex-shrink-0' src={logoImg} alt="logo image" />
          <span>Avatar</span>
        </Link>
      </header>

      <div className="relative text-center">
        <h1 className="text-4xl sm:text-6xl relative z-10 font-[family-name:var(--spooky-bold)]">
          Customize your Avatar
        </h1>

        <span className="absolute inset-0 top-2 text-primary text-4xl sm:text-6xl font-[family-name:var(--spooky-bold)] mb-12">
          Customize your Avatar
        </span>
      </div>
      <main className='flex-1 flex items-center justify-start flex-col gap-8 md:gap-14 relative z-10'>
        <SpookyAvatar id={id} />
      </main>
    </div>
  );
}
