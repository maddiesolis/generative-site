import { LayoutDiv } from "../home/HomePage";
import Navbar from "../Navbar";
import { PageContainerDiv } from "../home/HomeComponents";
import { Quiz } from "./Quiz";

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