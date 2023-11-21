import React from "react";
import styled from "styled-components";
import { DescriptionSpan, HomeDiv, HomeLeftSideDiv, HomeTitleDiv, PageContainerDiv } from './HomeComponents';
import Navbar from "../Navbar";
import { GradientText } from "./GradientText";
import { InitialFlicker } from "./InitialFlicker";

export const LayoutDiv = styled.div`
    display: grid;
    grid-template-rows: 10% 90%;
    height: 100vh;
    font-family: 'Poppins', sans-serif;
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
                            <DescriptionSpan>
                            This exhibition explores ways to represent individuals based on their philosophical perceptions of the world, as well as their general thought process patterns. 
                            Imagery and literature are used throughout the gallery, particularly in the interactive activity located under the <i>You</i> tab.
                            The <i>Gallery</i> tab uses randomization to showcase the artworks.
                            </DescriptionSpan>
                        </HomeTitleDiv>
                    </HomeLeftSideDiv>
                </HomeDiv>
            </PageContainerDiv>
        </LayoutDiv>
    );
};