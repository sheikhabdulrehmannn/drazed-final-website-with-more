import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50, 
  pauseTime = 2000 
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, speed, deleteSpeed, pauseTime]);

  return (
    <span className="text-primary">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterText;