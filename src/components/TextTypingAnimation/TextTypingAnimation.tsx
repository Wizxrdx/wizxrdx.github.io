"use client";

import { useEffect, useState } from "react";
import style from './TextTypingAnimation.module.css';

export default function TextTypingAnimation({ text }: { text: string[] }) {

  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWord, setCurrentWord] = useState(text[0]);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const type = () => {
      // handle typing and deleting
      if (isDeleting) {
        setCurrentText(() => currentWord.substring(0, currentText.length - 1));
      } else {
        setCurrentText(() => currentWord.substring(0, currentText.length + 1));
      }
      
      // if the word is complete, start deleting after a pause
      if (!isDeleting && currentText === currentWord) {
        setIsDeleting(true);
        setTypingSpeed(30);

      // if the word is deleted, move to the next word
      } else if (isDeleting && currentText === '') {
        setCurrentWord(text[(text.indexOf(currentWord) + 1) % text.length]);
        setIsDeleting(false);
      } else {
        if (!isDeleting) {
          setTypingSpeed(Math.random() * (100) + 100); // Random speed between 100ms and 200ms
        }
        if (!isDeleting && currentText === currentWord.substring(0, currentWord.length - 1)) {
          setTypingSpeed(1500); // Pause before completing the word
        }
      }
    };
    
    const timer = setTimeout(type, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWord, text, typingSpeed]);

  return (
    <span className={style.textTypingAnimation}>
      {currentText}
    </span>
  );
}