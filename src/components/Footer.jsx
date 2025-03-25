import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="mt-12 pt-6 border-t border-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="container px-4 md:px-6 py-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-lg font-medium mb-4">How to use:</h3>
          <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
            <li>Type or paste your text in the input field above</li>
            <li>Select a color from the color picker</li>
            <li>Copy the formatted text using the "Copy Code" button</li>
            <li>Paste the copied text</li>
          </ol>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;