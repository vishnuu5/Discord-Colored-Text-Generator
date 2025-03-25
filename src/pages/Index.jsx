import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import ColorPicker from '../components/ColorPicker';
import TextPreview from '../components/TextPreview';
import Footer from '../components/Footer';

const Index = () => {
  const [text, setText] = useState('');
  const [selectedColor, setSelectedColor] = useState({ 
    name: 'Default', 
    color: '#ffffff',
    code: ''
  });

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <motion.div 
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="p-6">
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your message:
                </label>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                    placeholder="Type your Discord message here..."
                    value={text}
                    onChange={handleTextChange}
                  />
                </motion.div>
              </div>
              
              <ColorPicker 
                onColorChange={handleColorChange}
                selectedColor={selectedColor}
              />
              
              <TextPreview 
                text={text}
                color={selectedColor}
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-4">Colored Text Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg border border-gray-100 p-4">
                <h3 className="font-medium mb-2">Red Text</h3>
                <div className="bg-[#36393f] text-[#dc3545] p-3 rounded font-mono">
                  This is red text
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Use the diff syntax with a minus sign
                </p>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-100 p-4">
                <h3 className="font-medium mb-2">Green Text</h3>
                <div className="bg-[#36393f] text-[#28a745] p-3 rounded font-mono">
                  This is green text in
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Use the diff syntax with a plus sign
                </p>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-100 p-4">
                <h3 className="font-medium mb-2">Blue Text</h3>
                <div className="bg-[#36393f] text-[#007bff] p-3 rounded font-mono">
                  This is blue text
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Use the ini syntax with brackets
                </p>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-100 p-4">
                <h3 className="font-medium mb-2">Yellow Text</h3>
                <div className="bg-[#36393f] text-[#ffc107] p-3 rounded font-mono">
                  This is yellow text
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Use the fix syntax with hash
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;