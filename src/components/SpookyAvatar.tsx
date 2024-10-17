'use client'

import { CldImage } from "next-cloudinary";
import CustomAvatar from "./CustomAvatar";
import { useCallback, useEffect, useState } from "react";

interface CustomAvatarProps {
  id: string;
}

const prompts = [
  'A hooded male with a pale face bloody marks dark eyes and a haunting expression',
  "A terrifying zombie figure with a pale face deep cuts bloody marks and dark hollow eyes staring with a deadly gaze",
  "A gruesome zombie with a pale lifeless face blood dripping from knife wounds and an unsettling stare",
  "A horrifying undead figure with knives stabbed into its body blood splattered across its pale face and eyes filled with terror",
  "A monstrous zombie with a haunting gaze bloodsoaked face and deep knife wounds adding to its terrifying appearance",
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
  "A foreboding forest with bloodred flowers blooming amidst the shadows",
  "A nightmarish forest illuminated by a ghostly light reflecting off pools of blood",
  "A desolate woodland where blood drips from the branches creating a macabre atmosphere",
  "A cursed forest echoing with the cries of the lost surrounded by rivers of blood",
  "A terrifying forest with blood soaked soil and dark creatures lurking in the underbrush"
];

const choosePromptFrom = (array: string[]): string => {
  return array[Math.floor(Math.random() * array.length)]
}


const SpookyAvatar: React.FC<CustomAvatarProps> = ({id}) => {
  const [rounded, setRounded] = useState('max');
  const [loading, setLoading] = useState(false)
  const [prompt, setPrompt] = useState('');
  const [promptScene, setPromptScene] = useState('')

  const changePrompts = useCallback(() => {
    const randomPrompt = choosePromptFrom(prompts);
    const randomScenePrompt = choosePromptFrom(backgroundPrompts);
    setPrompt(randomPrompt);
    setPromptScene(randomScenePrompt)
  }, [])

  useEffect(() => {
    changePrompts()
  }, [changePrompts]);

  useEffect(() => {
    setLoading(true)
  }, [prompt, promptScene])

  return (
    <>
      <CustomAvatar rounded={rounded} setRounded={setRounded} updatePrompts={changePrompts} />

        {loading && <div className="rounded-full w-[250px] aspect-square animate-pulse bg-darkgrey" />}

        {
          prompt && promptScene && (
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
                prompt: promptScene,
                seed: 5
              }}
              format='png'
              onLoad={() => setLoading(false)}
              onError={() => console.log('Error inesperado')}
          />
          )
        }
    </>
  )
}

export default SpookyAvatar