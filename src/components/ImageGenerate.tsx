import { CldImage } from "next-cloudinary"
import { CloudDownload } from "./Icons"

interface Props {
  loading: boolean
  error: boolean
  id: string
  rounded: boolean
  setLoading: (value: boolean) => void
  handleError: () => void
  prompt: string
  promptScene: string
  effects?: Record<string, string | boolean>
}


export default function ImageGenerate({loading, error, id, rounded, setLoading, handleError, prompt, promptScene, effects}: Props) {
  return (
    <div className="relative group">
      <CldImage
        alt='Spooky image generated'
        width={250}
        className={`${loading || error ? 'h-0 w-0' : ''} transition-all`}
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
        {...effects}
        
        format='png'
        onLoad={() => setLoading(false)}
        onError={handleError}
      />

      <div className="scale-0 group-hover:scale-100 transition-transform absolute inset-0 rounded-full backdrop-blur-sm bg-primary/50 grid place-content-center">
        <button title="download" className="transition-transform hover:scale-110 active:scale-100 grid place-content-center h-14 w-14 shadow-white rounded-full shadow-2xl bg-primary text-white">
          <CloudDownload width={32} height={32} />
        </button>
      </div>

    </div>
  )
}