'use client';

import { useSearchParams } from 'next/navigation';
import { CldImage } from "next-cloudinary";
import { useState, useEffect } from 'react';
import CustomAvatar from '@/components/CustomAvatar';
import Link from 'next/link';

const prompts = [
  'A hooded male with a pale face bloody marks dark eyes and a haunting expression',
  "A terrifying zombie figure with a pale face deep cuts bloody marks and dark hollow eyes staring with a deadly gaze",
  "A gruesome zombie with a pale lifeless face blood dripping from knife wounds and an unsettling stare",
  "A horrifying undead figure with knives stabbed into its body blood splattered across its pale face and eyes filled with terror",
  "A monstrous zombie with a haunting gaze blood-soaked face and deep knife wounds adding to its terrifying appearance",
  "A grotesque zombie figure with knives sticking out of its pale skin blood running down its face and a fearsome expression",
  
  "A male zombie with a torn face deep gashes knives sticking out of its chest and blood covering his pale skin",
  "A horrifying male undead with bloodshot eyes deep scars across his face and a wicked grin stained with blood",
  "A grotesque male zombie with decayed flesh knives piercing his chest and blood dripping from his lifeless eyes",
  "A terrifying male zombie with a mangled face blood streaming down his hollowed cheeks and knives stuck in his chest",
  "A bloodsoaked male figure with sunken eyes a mutilated face and deep knife wounds all over his body"
];

const backgroundPrompts = [
  "A dark forest drenched in blood with twisted trees and eerie shadows",
  "A sinister forest filled with puddles of blood and ominous fog creeping between the trees",
  "A haunted forest where blood flows like a river under the gnarled branches",
  "A chilling woodland covered in a thick layer of blood with ghostly figures lurking",
  "An abandoned forest shrouded in darkness with bloodied leaves scattered across the ground",
  "A foreboding forest with blood-red flowers blooming amidst the shadows",
  "A nightmarish forest illuminated by a ghostly light reflecting off pools of blood",
  "A desolate woodland where blood drips from the branches creating a macabre atmosphere",
  "A cursed forest echoing with the cries of the lost surrounded by rivers of blood",
  "A terrifying forest with blood-soaked soil and dark creatures lurking in the underbrush"
];


export default function ResultsPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [rounded, setRounded] = useState('max');
  const [prompt, setPrompt] = useState('');
  const [bg, setBg] = useState('')
  const [regenerate, setRegenerate] = useState(true)

  useEffect(() => {
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    const randomBackground = backgroundPrompts[Math.floor(Math.random() * backgroundPrompts.length)];
    setPrompt(randomPrompt);
    setBg(randomBackground)
    setRegenerate(false)
  }, [regenerate]);

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
      <main className='flex-1 flex items-center justify-start flex-col gap-20 relative z-10'>

        <CustomAvatar rounded={rounded} setRounded={setRounded} setRegenerate={setRegenerate} />

        {
          prompt && bg && (
            <CldImage
              alt='Spooky image generated'
              width={250}
              height={250}
              src={id}
              crop={{
                aspectRatio: 1,
                type:"thumb",
                gravity:"faces",
                width: 250,
                source: true
              }}
              radius={rounded}
              background='transparent'
              effects={[{
                outline: '5',
                color: 'orange'
              }]}
              replace={{
                from: 'people',
                to: prompt,
                preserveGeometry: true,
              }}
              replaceBackground={{
                prompt: bg,
                seed: 5
              }}
              format='png'
            />
          )
        }
      </main>
    </div>
  );
}
