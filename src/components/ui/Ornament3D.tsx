import React from 'react';
import { motion, useTransform, useMotionValue, useReducedMotion, MotionValue } from 'motion/react';

export type OrnamentType =
  | 'lime-spring'
  | 'white-spring'
  | 'white-torus'
  | 'lime-cylinder'
  | 'white-pyramid';

export interface Ornament3DProps {
  type?: OrnamentType;
  imageSrc?: string;
  alt?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  floatDuration?: number;
  floatDelay?: number;
  floatY?: number | [number, number, number];
  floatX?: number | [number, number, number];
  baseRotateZ?: number;
  baseRotateX?: number;
  baseRotateY?: number;
  rotateZ?: number | [number, number, number];
  rotateX?: number | [number, number, number];
  rotateY?: number | [number, number, number];
  scale?: [number, number, number];
  parallaxFactor?: number;
  smoothX?: MotionValue<number>;
  smoothY?: MotionValue<number>;
  depth?: number;
}

// Direct 1:1 map between semantic types and public PNG images
const TYPE_TO_PNG_MAP: Record<OrnamentType, string> = {
  'lime-spring': '/3dOrnamentLeft1.png',
  'white-spring': '/3dOrnamentLeft2.png',
  'white-torus': '/3dOrnamentLeft3.png',
  'lime-cylinder': '/3dOrnamentRight1.png',
  'white-pyramid': '/3dOrnamentRight2.png',
};

export const Ornament3D: React.FC<Ornament3DProps> = ({
  type = 'lime-spring',
  imageSrc,
  alt = '',
  className = '',
  width,
  height,
  floatDuration = 5.5,
  floatDelay = 0,
  floatY = 10,
  floatX = 4,
  baseRotateZ = 0,
  baseRotateX = 0,
  baseRotateY = 0,
  rotateZ = 3,
  rotateX = 2,
  rotateY = 2,
  scale = [0.99, 1.015, 0.99],
  parallaxFactor = 10,
  smoothX,
  smoothY,
  depth = 0,
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Motion fallback values
  const fallbackX = useMotionValue(0);
  const fallbackY = useMotionValue(0);

  const activeSmoothX = smoothX ?? fallbackX;
  const activeSmoothY = smoothY ?? fallbackY;

  const parallaxX = useTransform(activeSmoothX, (val) =>
    shouldReduceMotion ? 0 : val * parallaxFactor
  );
  const parallaxY = useTransform(activeSmoothY, (val) =>
    shouldReduceMotion ? 0 : val * (parallaxFactor * 0.75)
  );

  const getRotArray = (base: number, rot: number | [number, number, number]): [number, number, number] => {
    if (Array.isArray(rot)) return [rot[0] + base, rot[1] + base, rot[2] + base];
    return [base - rot, base + rot, base - rot];
  };

  const animateValues = shouldReduceMotion
    ? {
        rotateZ: baseRotateZ,
        rotateX: baseRotateX,
        rotateY: baseRotateY,
      }
    : {
        y: Array.isArray(floatY) ? floatY : [-floatY, floatY, -floatY],
        x: Array.isArray(floatX) ? floatX : [-floatX, floatX, -floatX],
        rotateZ: getRotArray(baseRotateZ, rotateZ),
        rotateX: getRotArray(baseRotateX, rotateX),
        rotateY: getRotArray(baseRotateY, rotateY),
        scale: scale,
      };

  const finalSrc = imageSrc || (type ? TYPE_TO_PNG_MAP[type] : '/3dOrnamentLeft1.png');

  return (
    <motion.div
      style={{
        ...(width !== undefined ? { width } : {}),
        ...(height !== undefined ? { height } : {}),
        x: parallaxX,
        y: parallaxY,
        perspective: 1200,
        transformStyle: 'preserve-3d',
        zIndex: depth,
      }}
      className={`pointer-events-none select-none flex items-center justify-center ${className}`}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d' }}
        animate={animateValues}
        transition={{
          y: {
            duration: floatDuration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: floatDelay,
          },
          x: {
            duration: floatDuration * 1.15,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: floatDelay * 0.7,
          },
          rotateZ: {
            duration: floatDuration * 1.25,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: floatDelay * 0.5,
          },
          rotateX: {
            duration: floatDuration * 1.35,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: floatDelay * 0.8,
          },
          rotateY: {
            duration: floatDuration * 1.2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: floatDelay * 0.4,
          },
          scale: {
            duration: floatDuration * 1.1,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: floatDelay * 0.6,
          },
        }}
      >
        <img
          src={finalSrc}
          alt={alt || `${type || '3D'} ornament`}
          loading="eager"
          className="w-full h-full object-contain pointer-events-none select-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)]"
        />
      </motion.div>
    </motion.div>
  );
};
