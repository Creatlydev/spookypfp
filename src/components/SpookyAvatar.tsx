/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import CustomAvatar from "./CustomAvatar";
import { useCallback, useEffect, useState } from "react";
import animationData from '@/public/lotties/ghost.json'
import LottieAnimation from "./LottieAnimation";
import Link from "next/link";
import { backgroundPrompts, ghostPrompts, prompts, skullPrompts, VERSION } from "@/consts";
import ImageGenerate from "./ImageGenerate";

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
    const spookyVersion = version === VERSION.GHOST ? ghostPrompts : skullPrompts
    const randomPrompt = choosePromptFrom(prompt, spookyVersion)
    setError(false)
    setPrompt(randomPrompt)
  }, [])

  const handleError = useCallback(() => {
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
              <ImageGenerate
                loading={loading}
                setLoading={setLoading}
                rounded={rounded}
                error={error}
                handleError={handleError}
                prompt={prompt}
                promptScene={promptScene}
                id={id}
                effects={
                  {
                    cartoonify: true
                  }
                }
              />

              <ImageGenerate
                loading={loading}
                setLoading={setLoading}
                rounded={rounded}
                error={error}
                handleError={handleError}
                prompt={prompt}
                promptScene={promptScene}
                id={id}
              />

              <ImageGenerate
                loading={loading}
                setLoading={setLoading}
                rounded={rounded}
                error={error}
                handleError={handleError}
                prompt={prompt}
                promptScene={promptScene}
                id={id}
                effects={
                  {
                    sepia: true
                  }
                }
              />
            </div>
          )
        }

    </>
  )
}