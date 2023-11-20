import React, { useEffect, useState } from 'react';
import { IntroSpan } from './HomeComponents';

interface WordFlickerProps {
  text: string;
}

export const InitialFlicker: React.FC<WordFlickerProps> = (props) => {
  const [displayedText, setDisplayedText] = useState<string>('');

  useEffect(() => {
    const animationDuration = 100; // Duration for each character appearance in milliseconds
    let charIndex = 0;

    const displayWord = () => {
      if (charIndex <= props.text.length) {
        setDisplayedText(props.text.substring(0, charIndex));
        charIndex++;
        setTimeout(displayWord, animationDuration);
      }
    };

    displayWord();
  }, [props.text]);

  return (
    <IntroSpan>{displayedText}</IntroSpan>
  );
};
