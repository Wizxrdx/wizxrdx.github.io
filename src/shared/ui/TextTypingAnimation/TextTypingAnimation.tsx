"use client";

import { useEffect, useState } from "react";
import styles from "./TextTypingAnimation.module.css";

type TextTypingAnimationProps = {
  text: string[];
};

export default function TextTypingAnimation({ text }: TextTypingAnimationProps) {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWord, setCurrentWord] = useState(text[0]);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const type = () => {
      if (isDeleting) {
        setCurrentText(() => currentWord.substring(0, currentText.length - 1));
      } else {
        setCurrentText(() => currentWord.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === currentWord) {
        setIsDeleting(true);
        setTypingSpeed(30);
      } else if (isDeleting && currentText === "") {
        setCurrentWord(text[(text.indexOf(currentWord) + 1) % text.length]);
        setIsDeleting(false);
      } else {
        if (!isDeleting) {
          setTypingSpeed(Math.random() * 100 + 100);
        }
        if (!isDeleting && currentText === currentWord.substring(0, currentWord.length - 1)) {
          setTypingSpeed(1500);
        }
      }
    };

    const timer = window.setTimeout(type, typingSpeed);

    return () => window.clearTimeout(timer);
  }, [currentText, isDeleting, currentWord, text, typingSpeed]);

  return (
    <span className={styles.typingSlot}>
      <span className={styles.textTypingAnimation}>{currentText}</span>
    </span>
  );
}
