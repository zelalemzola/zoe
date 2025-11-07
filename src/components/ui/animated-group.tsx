'use client';
import { ReactNode } from 'react';
import { motion, Variants } from 'motion/react';
import React from 'react';

export type PresetType =
  | 'fade'
  | 'slide'
  | 'scale'
  | 'blur'
  | 'blur-slide'
  | 'zoom'
  | 'flip'
  | 'bounce'
  | 'rotate'
  | 'swing';

export type AnimatedGroupProps = {
  children: ReactNode;
  className?: string;
  // Variants typing can be strict across different motion versions — accept any to avoid
  // transient type mismatches when consumers pass custom variant objects.
  variants?: any;
  preset?: PresetType;
  as?: React.ElementType;
  asChild?: React.ElementType;
};

const defaultContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const presetVariants: Record<PresetType, Variants> = {
  fade: {},
  slide: {
    hidden: { y: 20 },
    visible: { y: 0 },
  },
  scale: {
    hidden: { scale: 0.8 },
    visible: { scale: 1 },
  },
  blur: {
    hidden: { filter: 'blur(4px)' },
    visible: { filter: 'blur(0px)' },
  },
  'blur-slide': {
    hidden: { filter: 'blur(4px)', y: 20 },
    visible: { filter: 'blur(0px)', y: 0 },
  },
  zoom: {
    hidden: { scale: 0.5 },
    visible: {
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
  },
  flip: {
    hidden: { rotateX: -90 },
    visible: {
      rotateX: 0,
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
  },
  bounce: {
    hidden: { y: -50 },
    visible: {
      y: 0,
      transition: { type: 'spring', stiffness: 400, damping: 10 },
    },
  },
  rotate: {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
      transition: { type: 'spring', stiffness: 200, damping: 15 },
    },
  },
  swing: {
    hidden: { rotate: -10 },
    visible: {
      rotate: 0,
      transition: { type: 'spring', stiffness: 300, damping: 8 },
    },
  },
};

const addDefaultVariants = (variants: any) => ({
  hidden: { ...defaultItemVariants.hidden, ...(variants?.hidden || {}) },
  visible: { ...defaultItemVariants.visible, ...(variants?.visible || {}) },
});

function AnimatedGroup({
  children,
  className,
  variants,
  preset,
  as = 'div',
  asChild = 'div',
}: AnimatedGroupProps) {
  const selectedVariants = {
    item: addDefaultVariants(preset ? presetVariants[preset] : {}),
    container: addDefaultVariants(defaultContainerVariants),
  };
  const containerVariants = variants?.container || selectedVariants.container;
  const itemVariants = variants?.item || selectedVariants.item;

  // motion.create typing varies between motion packages/versions and
  // keyof JSX.IntrinsicElements can include number|symbol in some TS lib configs.
  // Use a runtime-safe resolution and cast to `any` for JSX use to avoid
  // transient type mismatches while preserving behavior.
  const MotionComponent = React.useMemo(() => {
    const m: any = motion as any
    // prefer a create factory if available
    if (typeof m.create === 'function') return m.create(as as any)
    // fallback to intrinsic lookup (e.g. m.div) or component wrapper
    return m[as as any] ?? m.div
  }, [as]) as any

  const MotionChild = React.useMemo(() => {
    const m: any = motion as any
    if (typeof m.create === 'function') return m.create(asChild as any)
    return m[asChild as any] ?? m.div
  }, [asChild]) as any

  const MC = MotionComponent as any
  const MChild = MotionChild as any

  return (
    <MC initial="hidden" animate="visible" variants={containerVariants} className={className}>
      {React.Children.map(children, (child, index) => (
        <MChild key={String(index)} variants={itemVariants}>
          {child}
        </MChild>
      ))}
    </MC>
  )
}

export { AnimatedGroup };
