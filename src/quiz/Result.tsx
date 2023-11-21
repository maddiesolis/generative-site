import React from 'react'; 
import { QuestionLayoutDiv, TitleH2 } from './Question';
import styled from 'styled-components';
import { QuizDescriptionSpan } from './QuizIntro';

const ResultLayoutDiv = styled(QuestionLayoutDiv)`
  gap: 0;
  width: 800px;
`
const ArtPieceDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  img {
    width: 30rem;
    height: 30rem;
	  border-radius: 4px;
    @media (min-width: 1600px) {
      width: 35rem;
      height: 35rem;
    }
  }
`;

interface ResultProps {
    image: any;
    title: string;
    description: string;
}
export const Result: React.FC<ResultProps> = ({image, title, description}) => { 
	return ( 
        <div>
          <ResultLayoutDiv>
            <TitleH2>"{title}"</TitleH2>
            <QuizDescriptionSpan>
                {description}
            </QuizDescriptionSpan>
          </ResultLayoutDiv>
            <ArtPieceDiv>
                <img src={image} alt="Result"></img>
            </ArtPieceDiv>
        </div>
	); 
}; 
