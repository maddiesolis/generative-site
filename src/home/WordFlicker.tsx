import React, { useEffect, useState } from 'react';
import { IntroSpan } from './HomeComponents';

interface WordFlickerProps {
    words: string[]
}

export const WordFlicker: React.FC<WordFlickerProps> = (props) => {
    const words = props.words;
    const [displayedWord, setDisplayedWord] = useState<string>('');

    let i = 0;
    let offset = 0;
    const len = words.length;
    let forwards = true;
    let skip_count = 0;
    const skip_delay = 30;
    const speed = 50;

    useEffect(() => {
        const wordFlick = setInterval(() => {
        if (forwards) {
            if (offset >= words[i].length) {
            ++skip_count;
            if (skip_count === skip_delay) {
                forwards = false;
                skip_count = 0;
            }
            }
        } else {
            if (offset === 0) {
                forwards = true;
                const prev = i;
                i = Math.floor(Math.random() * words.length); // Choose a random word index
                if (prev === i) {                             // Text should be different than previous text
                    if (i < len-1) {
                        i++;
                    } else {
                        i--;
                    }
                }
                offset = 0;
            }   
        }
        const part = words[i].substr(0, offset);
        if (skip_count === 0) {
            if (forwards) {
                offset++;
            } else {
                offset--;
            }
        }
        setDisplayedWord(part);
        }, speed);

        return () => clearInterval(wordFlick);
    }, []);

    return (
        <IntroSpan>{displayedWord}</IntroSpan>
    );
};
