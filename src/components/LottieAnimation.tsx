'use client';

import Lottie from 'lottie-react';

interface LottieAnimationProps {
  animationData: object;
}

export default function LottieAnimation({ animationData }: LottieAnimationProps) {
  return (
    <div>
      <Lottie
        animationData={animationData}
        loop={true}
        style={{ width: 200, height: 200 }}
      />
    </div>
  );
}
