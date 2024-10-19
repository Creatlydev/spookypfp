'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import SpookyAvatar from '@/components/SpookyAvatar';


export default function ResultsPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  if (!id) {
    return <div>No image data available.</div>;
  }

  return (
    <div className='overflow-hidden flex flex-col gap-12 h-[calc(100vh-3rem)] my-6 p-6 z-10
    shadow-box bg-[url(../public/hero-result.jpg)] bg-cover bg-center bg-no-repeat rounded-3xl bg-darkgrey/70 bg-blend-multiply'
    >

      <header className="relative z-10 flex w-full p-2 rounded-lg items-center flex-wrap justify-center bg-gradient-to-r from-cyan-700 to-blue-900 mt-auto">
        <Link href={'/'}>
          Back To Home
        </Link>
      </header>

      <div className="relative text-center">
        <h1 className="text-4xl sm:text-6xl relative z-10 font-[family-name:var(--spooky-bold)] mb-12">
          Customize your Avatar
        </h1>

        <span className="absolute inset-0 top-2 text-primary text-4xl sm:text-6xl font-[family-name:var(--spooky-bold)] mb-12">
          Customize your Avatar
        </span>
      </div>
      <main className='flex-1 flex items-center justify-start flex-col gap-16 relative z-10'>
        <SpookyAvatar id={id} />
      </main>
    </div>
  );
}
