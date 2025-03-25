import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy } from 'lucide-react';

const TextPreview = ({ text, color }) => {
  const [formattedText, setFormattedText] = useState('');
  const [copied, setCopied] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (!text) {
      setFormattedText('');
      setDisplayText('');
      return;
    }

    let formatted = '';
    if (color.code) {
      formatted = '```' + color.code + text + (color.code.includes('\n') ? '' : ' ]') + '```';
    } else {
      formatted = text;
    }
    
    setFormattedText(formatted);
    
    // For display preview purposes
    if (color.name === 'Default') {
      setDisplayText(text);
    } else {
      setDisplayText(text);
    }
  }, [text, color]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formattedText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!text) {
    return (
      <motion.div 
        className="border border-dashed border-gray-200 rounded-lg p-6 text-center text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Enter some text above to see the preview
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="space-y-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Preview:</h3>
        <motion.button
          className={`
            inline-flex items-center space-x-2 px-3 py-1.5 rounded-md text-sm font-medium
            ${copied ? 'bg-green-100 text-green-700' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}
            transition-colors duration-200
          `}
          onClick={copyToClipboard}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {copied ? (
            <>
              <Check size={16} />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={16} />
              <span>Copy Code</span>
            </>
          )}
        </motion.button>
      </div>

      <div className="bg-[#36393f] text-white rounded-lg p-4 font-mono">
        <p className="whitespace-pre-wrap break-words" style={{ color: color.color !== '#ffffff' ? color.color : '#ffffff' }}>
          {displayText}
        </p>
      </div>

      <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 font-mono">
        <pre className="whitespace-pre-wrap break-words text-sm">{formattedText}</pre>
      </div>
    </motion.div>
  );
};

export default TextPreview;