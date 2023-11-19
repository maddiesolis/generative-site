import React from "react";
import styled from "styled-components";
import { AnimatedButton, AnimatedButtonDiv, AnimatedButtonLink, DescriptionSpan, FullNameSpan, HomeDiv, HomeLeftSideDiv, HomeRightSideDiv, HomeTitleDiv, PageContainerDiv, IntroSpan } from './HomeComponents';
import Navbar from "../Navbar";
import { WordFlicker } from "./WordFlicker";

export const LayoutDiv = styled.div`
    display: grid;
    grid-template-rows: 10% 90%;
    height: 100vh;
`

const HomePage: React.FunctionComponent = () => {

    return (
        <LayoutDiv>
            <Navbar/>
            <PageContainerDiv>
                <HomeDiv>
                    <HomeLeftSideDiv>
                        <HomeTitleDiv>
                            <WordFlicker words={["Welcome to the", "Bienvenue a la", "Bienvenidos al"]}/>
                            <FullNameSpan>Cat Sage Gallery</FullNameSpan>
                            <DescriptionSpan>Placeholder text here.</DescriptionSpan>
                        </HomeTitleDiv>
                    </HomeLeftSideDiv>
                    <HomeRightSideDiv>
                        SVG goes here
                    </HomeRightSideDiv>
                </HomeDiv>
            </PageContainerDiv>
        </LayoutDiv>
    );
};

export default HomePage;