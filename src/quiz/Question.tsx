import React from 'react'; 
import styled from 'styled-components';

export const QuestionLayoutDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    height: fit-content;
    padding: 2rem;
    gap: 2rem;
`;
export const TitleH2 = styled.h2`
    font-weight: 800;
    font-size: 28px;
    text-align: center;
    color: #6086BE;
`;
const OptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;
const Option = styled.button`
    font-family: 'Poppins', sans-serif;
    font-size: 22px;
    color: #18263B;
    padding: 10px;
    margin: 0 auto;
    width: 80%;
    border: none;
    border-radius: 24px;
    background-color: #dae2f0;
    &:hover {
        background-color: #acc0dd;
    }
    cursor: pointer;
`;

interface QuestionProps { 
	question: string; 
	options: string[]; 
	onAnswer: (answer: string) => void; 
} 

export const Question: React.FC<QuestionProps> = ( 
	{ question, options, onAnswer }) => { 
	return ( 
        <QuestionLayoutDiv>
            <TitleH2>{question}</TitleH2>
            <OptionsContainer> 
                {options.map((option) => ( 
                    <Option key={option} onClick={() => onAnswer(option)}> 
                        {option}
                    </Option> 
                ))} 
            </OptionsContainer>
        </QuestionLayoutDiv>
	); 
}; 
