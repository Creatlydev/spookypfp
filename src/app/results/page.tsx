'use client';

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { getCldImageUrl } from 'next-cloudinary';

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  if (!id) {
    return <div>No image data available.</div>;
  }

  // Generamos la URL con getCldImageUrl y aplicamos la transformación
  const transformedImageUrl = getCldImageUrl({
    src: id,
    aspectRatio: '1',
    crop: 'thumb',
    gravity: 'face',
    width: 250,
  });

  return (
    <div>
      <h1>Here is your spooky avatar!</h1>
      <Image width={250} height={250} src={transformedImageUrl} alt="Transformed Avatar" />
    </div>
  );
}
