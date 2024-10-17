import avatarOne from '@/public/avatars/avatar-1.png'
import avatarTwo from '@/public/avatars/avatar-2.png'
import avatarThree from '@/public/avatars/avatar-3.png'
import avatarFour from '@/public/avatars/avatar-4.png'
import avatarFive from '@/public/avatars/avatar-5.png'
import avatarSix from '@/public/avatars/avatar-6.png'
import Image from "next/image";
import UploadButton from "./UploadButton";

export default function Hero() {
  return (
    <section className='overflow-hidden relative container mx-auto px-4 py-4 h-[calc(100vh-3rem)] my-6 rounded-3xl
      flex items-center pt-12 flex-col text-center text-balance shadow-box
      bg-[url(../public/hero-bg.jpg)] bg-cover bg-center bg-no-repeat
    '>
      <div className="relative">
        <h1 className="text-4xl sm:text-6xl lg:text-9xl relative z-10 font-[family-name:var(--spooky-bold)] mb-12">
          SpookyPFP
        </h1>

        <h1 className="absolute inset-0 top-2 text-primary text-4xl sm:text-6xl lg:text-9xl font-[family-name:var(--spooky-bold)] mb-12">
          SpookyPFP
        </h1>
      </div>
      <p className="font-semibold text-2xl">
        Transform your profile into a&nbsp;Halloween&nbsp;Nightmare!
      </p>
      
      <UploadButton />

      <footer className="flex w-full p-2 rounded-lg items-center flex-wrap justify-center bg-gradient-to-r from-cyan-700 to-blue-900 mt-auto">
        Project developed by&nbsp;
        <a className="font-semibold decoration-wavy decoration-1 underline" href="https://github.com/Creatlydev" target="_blank">Samir</a> 
        &nbsp;For the 
        &nbsp;<a className="font-semibold decoration-wavy decoration-1 underline" href="https://spooke-ia-cloudinary.netlify.app/" target="_blank">Cloudinary Hackathon</a>
      </footer>

      {/* AVATARS EXAMPLES */}
      <div className="absolute bottom-0 inset-x-0 flex items-center justify-center">
        <Image
          className="w-20 md:translate-x-[150%] lg:translate-x-[400%] xl:translate-x-[550%] 2xl:translate-x-[650%] absolute bottom-0 -translate-y-[200%] left-0 translate-x-[550%] mix-blend-screen"
          src={avatarOne}
          alt=""
        />

        <Image
          className="w-20 absolute md:-translate-x-[150%] lg:-translate-x-[400%] xl:-translate-x-[550%] 2xl:-translate-x-[650%] bottom-0 -translate-y-[200%] right-0 -translate-x-[550%] mix-blend-screen"
          src={avatarTwo}
          alt=""
        />

        <Image
          className="w-20 absolute md:translate-x-[100%] lg:translate-x-[350%] xl:translate-x-[500%] 2xl:translate-x-[600%] bottom-0 -translate-y-[350%] left-0 translate-x-[500%] mix-blend-screen"
          src={avatarThree}
          alt=""
        />

        <Image
          className="w-20 absolute md:-translate-x-[100%] lg:-translate-x-[350%] xl:-translate-x-[500%] 2xl:-translate-x-[600%] bottom-0 -translate-y-[350%] right-0 -translate-x-[500%] mix-blend-screen"
          src={avatarFour}
          alt=""
        />

        <Image
          className="w-20 absolute bottom-0 sm:hidden xl:block 2xl:translate-x-[520%] -translate-y-[220%] left-0 translate-x-[420%] mix-blend-screen"
          src={avatarFive}
          alt=""
        />

        <Image
          className="w-20 absolute sm:hidden xl:block 2xl:-translate-x-[520%] bottom-0 -translate-y-[220%] right-0 -translate-x-[420%] mix-blend-screen"
          src={avatarSix}
          alt=""
        />
      </div>  
    </section>
  )
}