/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { CldImage } from "next-cloudinary";
import CustomAvatar from "./CustomAvatar";
import { useCallback, useEffect, useState } from "react";
import animationData from '@/public/lotties/ghost.json'
import LottieAnimation from "./LottieAnimation";
import Link from "next/link";
import { backgroundPrompts, pokemonPrompts, prompts, skullPrompts, VERSION } from "@/consts";

interface CustomAvatarProps {
  id: string;
}

const choosePromptFrom = (currentPrompt: string, array: string[]): string => {
  while (true) {
    const newPrompt = array[Math.floor(Math.random() * array.length)]
    if (newPrompt !== currentPrompt) return newPrompt
  }
}


export default function SpookyAvatar ({id}: CustomAvatarProps) {
  const [rounded, setRounded] = useState(true);
  const [loading, setLoading] = useState(false)
  const [prompt, setPrompt] = useState('');
  const [error, setError] = useState<boolean>(false)
  const [promptScene, setPromptScene] = useState('')

  const changePrompts = useCallback(() => {
    const randomPrompt = choosePromptFrom(prompt, prompts);
    const randomScenePrompt = choosePromptFrom(prompt, backgroundPrompts);
    setError(false)
    setPrompt(randomPrompt);
    setPromptScene(randomScenePrompt)
  }, [])

  const changeVersion = useCallback((version: string) => {
    const spookyVersion = version === VERSION.POKEMON ? pokemonPrompts : skullPrompts
    const randomPrompt = choosePromptFrom(prompt, spookyVersion)
    setError(false)
    setPrompt(randomPrompt)
  }, [])

  const handleError = useCallback((event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setError(true)
    setLoading(false)
  }, [])

  useEffect(() => {
    changePrompts()
  }, [changePrompts]);

  useEffect(() => {
    setLoading(true)
  }, [prompt, promptScene])

  return (
    <>
      <CustomAvatar disabled={loading} changeVersion={changeVersion} error={error} rounded={rounded} setRounded={setRounded} updatePrompts={changePrompts} />

        {loading && <LottieAnimation animationData={animationData} />}

        {(loading || error) && (
          <div className="text-center">
            <p className={`text-primary sm:text-xl ${!error && 'animate-pulse'}`}>
              {
                error ? 'BooH! An error has ocurred' : 'One moment please ...'
              }
            </p>
            <p className="text-primary sm:text-2xl font-semibold">
              {
                error ? 'please try to regenerate' : 'If I were you I prepare for the worst'
              }
            </p>

          {error && (
            <div>
              <span className="block mt-2 font-semibold">Ó</span>
              <Link className="mt-4 inline-block hover:text-green-500 font-semibold" href='/'>
                Try another photo
              </Link>
            </div>
          )}
          </div>
        )}

        {
          prompt && promptScene && (
            <div className="avatars flex justify-start overflow-x-auto items-center md:justify-center gap-4">
              <CldImage
                alt='Spooky image generated'
                width={250}
                className={`${loading || error ? 'h-0 w-0' : 'h-auto'} transition-all`}
                height={250}
                src={id}
                quality='auto:low'
                crop={{
                  aspectRatio: 1,
                  type:"thumb",
                  gravity:"faces",
                  width: 250,
                  source: true
                }}
                radius={rounded ? 'max' : '0'}
                background='transparent'
                effects={[{
                  outline: '5',
                  color: 'orange',
                }]}
                replace={{
                  from: 'people',
                  to: prompt,
                  preserveGeometry: true
                }}
                replaceBackground={{
                  prompt: promptScene,
                  seed: 5
                }}
                cartoonify= {true}
                
                format='png'
                onLoad={() => setLoading(false)}
                onError={handleError}
              />

              <CldImage
                  alt='Spooky image generated'
                  width={250}
                  className={`${loading || error ? 'h-0 w-0' : 'h-auto'} transition-all`}
                  height={250}
                  src={id}
                  quality='auto:low'
                  crop={{
                    aspectRatio: 1,
                    type:"thumb",
                    gravity:"faces",
                    width: 250,
                    source: true
                  }}
                  radius={rounded ? 'max' : '0'}
                  background='transparent'
                  effects={[{
                    outline: '5',
                    color: 'orange',
                  }]}
                  replace={{
                    from: 'people',
                    to: prompt,
                    preserveGeometry: true
                  }}
                  replaceBackground={{
                    prompt: promptScene,
                    seed: 5
                  }}

                  format='png'
                  onLoad={() => setLoading(false)}
                  onError={handleError}
              />

              <CldImage
                  alt='Spooky image generated'
                  width={250}
                  className={`${loading || error ? 'h-0 w-0' : 'h-auto'} transition-all`}
                  height={250}
                  src={id}
                  quality='auto:low'
                  crop={{
                    aspectRatio: 1,
                    type:"thumb",
                    gravity:"faces",
                    width: 250,
                    source: true
                  }}
                  radius={rounded ? 'max' : '0'}
                  background='transparent'
                  effects={[{
                    outline: '5',
                    color: 'orange',
                  }]}
                  replace={{
                    from: 'people',
                    to: prompt,
                    preserveGeometry: true
                  }}
                  replaceBackground={{
                    prompt: promptScene,
                    seed: 5
                  }}

                  sepia= {true}

                  format='png'
                  onLoad={() => setLoading(false)}
                  onError={handleError}
              />
            </div>
          )
        }

    </>
  )
}