import React from 'react';
import { motion } from 'framer-motion';

export function AnimationBorder({ isNav = true, keyValue, children }) {
  return (
    <motion.div
      key={keyValue}
      className="relative inline-block"
      initial={isNav ? 'rest' : { width: '0%' }}
      whileHover={isNav ? 'hover' : { width: '100%' }}
      animate={isNav ? 'rest' : { width: '100%' }}
    >
      <span>{children}</span>
      {isNav ? (
        // Animation for Nav
        <motion.div
          className="absolute left-0 bottom-0 h-[2px] bg-blue-500"
          variants={{
            rest: { width: '0%' },
            hover: { width: '100%' },
          }}
          transition={{ duration: 0.4 }}
        />
      ) : (
        // Animation for Non-Nav
        <motion.div
          className="absolute left-1/2 bottom-0 h-[2px] bg-gray-500 transform -translate-x-1/2"
          initial={{ width: '0%' }}
          whileHover={{ width: '100%' }}
          animate={{ width: '15%' }}
          transition={{ duration: 0.4 }}
        />
      )}
    </motion.div>
  );
}
