import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TextSpan = styled.span`
    font-weight: 800;
    font-size: 24px;
    line-height: 28px;
    height: 28px;
    color: ${props => props.color};
`

interface WordFlickerProps {
    textArray: string[];
    delay: number;
    color: string;
}

export const WordFlicker: React.FC<WordFlickerProps> = ({textArray, delay, color}) => {
    const [displayedText, setDisplayedText] = useState<string>('');

    let i = 0;
    let offset = 0;
    const len = textArray.length;
    let forwards = true;
    let skip_count = 0;
    const speed = 100;

    useEffect(() => {
        const wordFlick = setInterval(() => {
        if (forwards) {
            if (offset >= textArray[i].length) {
                ++skip_count;
                if (skip_count === delay) {
                    forwards = false;
                    skip_count = 0;
                }
            }
        } else {
            if (offset === 0) {
                forwards = true;
                const prev = i;
                i = Math.floor(Math.random() * textArray.length); // Choose a random word index
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
        const part = textArray[i].substr(0, offset);
        if (skip_count === 0) {
            if (forwards) {
                offset++;
            } else {
                offset--;
            }
        }
        setDisplayedText(part);
        }, speed);

        return () => clearInterval(wordFlick);
    }, []);

    return (
        <TextSpan color={color}>{displayedText}</TextSpan>
    );
};
