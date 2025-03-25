import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      className="py-6 mb-8 border-b border-gray-100"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container px-4 md:px-6">
        <motion.h1 
          className="heading-1 text-center text-3xl md:text-4xl lg:text-5xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Discord Colored Text Generator
        </motion.h1>
        <motion.p 
          className="text-muted-foreground text-center mt-3 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Create colorful text for your Discord messages using Markdown syntax
        </motion.p>
      </div>
    </motion.header>
  );
};

export default Header;