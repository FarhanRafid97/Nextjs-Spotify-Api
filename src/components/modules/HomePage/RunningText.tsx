import { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';
import { wrap } from '@motionone/utils';

interface ParallaxProps {
  text: string;
  baseVelocity: number;
}

export function ParallaxText({ text, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const ArrText = [text, text, text, text];

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  const renderedSplitText = () => {
    return ArrText.map((d, i) => {
      return (
        <p key={i} className='flex gap-8'>
          {d.split(' ').map((s, i) => (
            <span className={`${i % 2 ? 'even-span' : 'odd-span'}`} key={s}>
              {s}
            </span>
          ))}
        </p>
      );
    });
  };
  return (
    <div className='parallax'>
      <motion.div className='scroller text-ascent' style={{ x }}>
        {renderedSplitText()}
      </motion.div>
    </div>
  );
}
