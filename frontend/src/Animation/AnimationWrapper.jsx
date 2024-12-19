import React from 'react';
import { motion } from 'framer-motion';

export function AnimationWrapper({
  btn = false,
  keyValue,
  children,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 1 },
}) {
  return (
    <motion.div
      key={keyValue}
      whileHover={btn ? { scale: 1.02 } : undefined}
      whileTap={btn ? { scale: 1 } : undefined}
      initial={btn ? undefined : initial}
      animate={btn ? undefined : animate}
      transition={btn ? undefined : transition}
    >
      {children}
    </motion.div>
  );
}
