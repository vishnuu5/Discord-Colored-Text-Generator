import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ColorPicker = ({ onColorChange, selectedColor }) => {
  const discordColors = [
    { name: 'Default', color: '#ffffff', code: '' },
    { name: 'Gray', color: '#95a5a6', code: 'fix' },
    { name: 'Black', color: '#000000', code: '' },
    { name: 'Red', color: '#dc3545', code: 'diff\n- ' },
    { name: 'Orange', color: '#fd7e14', code: 'css\n[' },
    { name: 'Yellow', color: '#ffc107', code: 'fix\n# ' },
    { name: 'Green', color: '#28a745', code: 'diff\n+ ' },
    { name: 'Blue', color: '#007bff', code: 'ini\n[' },
    { name: 'Purple', color: '#6f42c1', code: 'apache\n# ' },
    { name: 'Pink', color: '#e83e8c', code: 'yaml\n' },
  ];

  const handleColorSelect = (color) => {
    onColorChange(color);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium mb-2">Choose a color:</label>
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-5 gap-3"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {discordColors.map((color) => (
          <motion.button
            key={color.name}
            className={`
              flex items-center justify-center px-4 py-3 rounded-lg border 
              transition-all duration-200 hover:shadow-md
              ${selectedColor.name === color.name 
                ? 'ring-2 ring-primary/50 border-primary/50' 
                : 'border-gray-100 hover:border-gray-200'}
            `}
            style={{ color: color.color !== '#ffffff' ? color.color : 'inherit' }}
            onClick={() => handleColorSelect(color)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            variants={item}
          >
            <span className="font-medium">{color.name}</span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default ColorPicker;