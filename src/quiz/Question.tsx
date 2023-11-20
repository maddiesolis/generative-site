import React from 'react'; 
import styled from 'styled-components';

export const QuestionLayoutDiv = styled.div`
  width: 600px;
  height: fit-content;
  padding: 2rem;
  /* border: 1px solid #ccc; */
  /* border-radius: 4px; */
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
`;
export const TitleH2 = styled.h2`
    font-family: 'Baloo Bhaijaan 2', sans-serif;
    font-weight: 800;
    font-size: 24px;
    text-align: center;
    margin-bottom: 3rem;
    color: #264653;
`;
const OptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
const Option = styled.button`
    font-family: 'Baloo Bhaijaan 2', sans-serif;
    font-size: 20px;
    padding: 10px;
    margin: 0 auto;
    width: 80%;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f5f5f5;
    &:hover {
        background-color: #767676;
    }
    cursor: pointer;
`;

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
        <QuestionLayoutDiv>
            <TitleH2>{question}</TitleH2>
            <OptionsContainer> 
                {choices.map((choice) => ( 
                    <Option key={choice} onClick={() => onAnswer(choice)}> 
                        {choice}
                    </Option> 
                ))} 
            </OptionsContainer>
        </QuestionLayoutDiv>
	); 
}; 
