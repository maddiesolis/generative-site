import React from "react";
import styled from "styled-components";
import { DescriptionSpan, TitleSpan, HomeDiv, HomeLeftSideDiv, HomeRightSideDiv, HomeTitleDiv, PageContainerDiv, IntroSpan, GridDiv } from './HomeComponents';
import Navbar from "../Navbar";
import { GradientText } from "./GradientText";
import { InitialFlicker } from "./InitialFlicker";
import blank_sample from "../images/blank_sample.png"
import { GridElementDiv } from "./GridElement";
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
                        <GridDiv>
                            <GridElementDiv><img src={blank_sample} alt={"Random"}></img></GridElementDiv>
                            <GridElementDiv><img src={blank_sample} alt={"Random"}></img></GridElementDiv>
                            <Slideshow images={[sample1, sample2, sample3, sample4]} seconds={10}/>
                            <GridElementDiv><img src={blank_sample} alt={"Random"}></img></GridElementDiv>
                            <Slideshow images={[sample1, sample2, sample3, sample4]} seconds={8}/>
                            <Slideshow images={[sample1, sample2, sample3, sample4]} seconds={17}/>
                            <Slideshow images={[sample1, sample2, sample3, sample4]} seconds={29}/>
                            <Slideshow images={[sample1, sample2, sample3, sample4]} seconds={21}/>
                            <Slideshow images={[sample1, sample2, sample3, sample4]} seconds={11}/>
                        </GridDiv>
                    </HomeRightSideDiv>
                </HomeDiv>
            </PageContainerDiv>
        </LayoutDiv>
    );
};