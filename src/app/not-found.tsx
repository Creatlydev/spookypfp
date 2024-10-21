import Link from 'next/link';
import halloweenAnimation from '@/public/lotties/halloween.json'
import LottieAnimation from '../components/LottieAnimation';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-white text-center">
      <LottieAnimation animationData={halloweenAnimation} />
      <h1 className="text-7xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6 opacity-90">Oops! We cant seem to find the page youre looking for.</p>
      <Link href="/" className='text-xl hover:text-primary underline decoration-wavy'>
        Go to home
      </Link>
    </div>
  );
}
