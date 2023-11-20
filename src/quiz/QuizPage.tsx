import { LayoutDiv } from "../home/HomePage";
import Navbar from "../Navbar";
import { PageContainerDiv } from "../home/HomeComponents";
import { Quiz } from "./Quiz";
import styled from "styled-components";

const QuizPageDiv = styled.div`
    display: flex;
    justify-content: center;
    padding: 5%;
`
export const QuizPage = () => {
    return (
        <LayoutDiv>
            <Navbar/>
            <QuizPageDiv>
                <Quiz/>
            </QuizPageDiv>
        </LayoutDiv>
    )
}