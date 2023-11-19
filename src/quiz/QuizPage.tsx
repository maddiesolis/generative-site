import React from "react";
import { LayoutDiv } from "../home/HomePage";
import Navbar from "../Navbar";
import Question from "./Question";
import Quiz from "./Quiz";
import { PageContainerDiv } from "../home/HomeComponents";

export const QuizPage = () => {
    return (
        <LayoutDiv>
            <Navbar/>
            <PageContainerDiv>
                <Quiz/>
            </PageContainerDiv>
        </LayoutDiv>
    )
}