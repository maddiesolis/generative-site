import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TextSpan = styled.span`
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
    height: 24px;
    color: ${props => props.color};
    @media (min-width: 1600px) {
        font-size: 24px;
        line-height: 28px;
        height: 28px;
    }
`

interface WordFlickerProps {
    textArray: string[];
    delay: number;
    color: string;
}

export const WordFlicker: React.FC<WordFlickerProps> = ({textArray, delay, color}) => {
    const [displayedText, setDisplayedText] = useState<string>('');

    useEffect(() => {
        let i = 0;
        let offset = 0;
        let forwards = true;
        let skip_count = 0;
        const len = textArray.length;
        const speed = 100;
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
    }, [delay, textArray]);

    return (
        <TextSpan color={color}>{displayedText}</TextSpan>
    );
};
