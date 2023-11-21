import { QuestionLayoutDiv, TitleH2 } from "./Question";
import styled from "styled-components";

export const QuizDescriptionSpan = styled.span`
    font-size: 22px;
    text-align: center;
    color: #18263B;
`

export const StartButton = styled.button`
    font-family: 'Poppins', sans-serif;
    font-size: 22px;
    font-weight: 800;
    color: #ffffff;
    padding: 10px 30px;
    margin: 0 auto;
    margin-top: 20px;
    border: none;
    border-radius: 24px;
    background-color: #CF835D;
    &:hover {
        background-color: #b56036;
    }
    cursor: pointer;
`;

interface QuizIntroProps {
    onStart: () => void;
 }

export const QuizIntro: React.FC<QuizIntroProps> = ({ onStart }) => { 
	return ( 
        <QuestionLayoutDiv>
            <TitleH2>Your Reflection Through The Cat Sage's Eyes</TitleH2>
            <QuizDescriptionSpan>
                The Cat Sage has three questions for you. There are no right or wrong answers, they simply seek to better understand the inner workings of your mind.
                Once you complete the questions, an image with a title and description will be shared with you based on the answers you provide.
            </QuizDescriptionSpan>
            <StartButton onClick={onStart}>Start</StartButton>
        </QuestionLayoutDiv>
	); 
}; 