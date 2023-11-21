import React from "react";
import styled from "styled-components";
import { DescriptionSpan, TitleSpan, HomeDiv, HomeLeftSideDiv, HomeRightSideDiv, HomeTitleDiv, PageContainerDiv, IntroSpan } from './HomeComponents';
import Navbar from "../Navbar";
import { GradientText } from "./GradientText";
import { InitialFlicker } from "./InitialFlicker";
import blank_sample from "../images/blank_sample.png"
import { Slideshow } from "./Slideshow";
import sample1 from '../images/sample1.png';
import sample2 from '../images/sample2.png';
import sample3 from '../images/sample3.png';
import sample4 from '../images/sample4.png';

export const LayoutDiv = styled.div`
    display: grid;
    grid-template-rows: 10% 90%;
    height: 100vh;
`

export const HomePage: React.FC = () => {
    return (
        <LayoutDiv>
            <Navbar/>
            <PageContainerDiv>
                <HomeDiv>
                    <HomeLeftSideDiv>
                        <HomeTitleDiv>
                            <InitialFlicker text="Welcome to the"/>
                            <GradientText text="Cat Sage Gallery"/>
                            <DescriptionSpan>Placeholder text here.</DescriptionSpan>
                        </HomeTitleDiv>
                    </HomeLeftSideDiv>
                    <HomeRightSideDiv>
                    </HomeRightSideDiv>
                </HomeDiv>
            </PageContainerDiv>
        </LayoutDiv>
    );
};