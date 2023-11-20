import React from 'react'; 
import { IntroSpan } from '../home/HomeComponents';
import styled from 'styled-components';

const ChoicesDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
const ChoiceButton = styled.button`
    border-radius: 2rem;
    background-color: #F07167;
    font-size: 16px;
    font-weight: 700;
    color: white;
    padding: 20px;
    width: 25rem;
    border: none;
`

interface QuestionProps { 
	question: string; 
	choices: string[]; 
	onAnswer: (answer: string) => void; 
    first?: boolean;
    last?: boolean;
} 

export const Question: React.FC<QuestionProps> = ( 
	{ question, choices, onAnswer, first, last }) => { 
	return ( 
        <>
            <IntroSpan>{question}</IntroSpan>
            <ChoicesDiv> 
                {choices.map((choice) => ( 
                    <ChoiceButton key={choice} onClick={() => onAnswer(choice)}> 
                        {choice}
                    </ChoiceButton> 
                ))} 
            </ChoicesDiv>
        </>
	); 
}; 
