import Button from "./Button";

export default function Hero() {
  return (
    <section className='container mx-auto px-6 h-[calc(100vh-3rem)] my-6 rounded-3xl
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
      <Button />
    </section>
  )
}