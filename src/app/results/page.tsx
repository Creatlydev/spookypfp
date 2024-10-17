'use client';

import { useSearchParams } from 'next/navigation';
import { CldImage } from "next-cloudinary";
import { useState, useEffect } from 'react';

const prompts = [
  'A hooded figure with a pale face bloody marks dark eyes and a haunting expression',
  "A terrifying zombie figure with a pale face deep cuts bloody marks and dark hollow eyes staring with a deadly gaze",
  "A gruesome zombie with a pale lifeless face blood dripping from knife wounds and an unsettling stare",
  "A horrifying undead figure with knives stabbed into its body blood splattered across its pale face and eyes filled with terror",
  "A monstrous zombie with a haunting gaze blood-soaked face and deep knife wounds adding to its terrifying appearance",
  "A grotesque zombie figure with knives sticking out of its pale skin blood running down its face and a fearsome expression",
  
  "A male zombie with a torn face deep gashes knives sticking out of its chest and blood covering his pale skin",
  "A horrifying male undead with bloodshot eyes deep scars across his face and a wicked grin stained with blood",
  "A grotesque male zombie with decayed flesh knives piercing his chest and blood dripping from his lifeless eyes",
  "A terrifying male zombie with a mangled face blood streaming down his hollowed cheeks and knives stuck in his chest",
  "A blood-soaked male figure with sunken eyes a mutilated face and deep knife wounds all over his body"
];


export default function ResultsPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [rounded, setRounded] = useState('max');
  const [prompt, setPrompt] = useState('');

  useEffect(() => {
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    setPrompt(randomPrompt);
  }, []);

  if (!id) {
    return <div>No image data available.</div>;
  }
  console.log(prompt)

  return (
    <>
      <header className='h-20 text-center flex items-center justify-center'>
        <h1>Here is your spooky avatar!</h1>
      </header>

      <main className='h-[calc(100vh-80px)] flex items-center justify-start flex-col gap-20 pt-20'>
        <select name="rounded" value={rounded} onChange={(e) => setRounded(e.target.value)}>
          <option value="max">Round</option>
          <option value="0">Square</option>
          <option value="25">Round corners</option>
          <option value="50">Extra rounded</option>
        </select>

        {
          prompt && (
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
                prompt: 'forest with a lot blood',
                seed: 5
              }}
              format='png'
            />
          )
        }
      </main>
    </>
  );
}
