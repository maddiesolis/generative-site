import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import doorway from "../images/doorway.png"
import mirror from "../images/mirror.png"
import touch from "../images/touch.png"
import { Title } from "./Title";

export interface StyledComponentProps {
  color: string;
}

const PageContainerDiv = styled.div<StyledComponentProps>`
  display: grid;
  grid-template-columns: 60% 40%;
  height: 100vh;
  background-color: ${props => props.color || 'white'};;
`;

const LhsContainerDiv = styled.div`
  display: grid;
  grid-template-rows: 20% 80%;
  border: solid black 2px;
`;

const RhsContainerDiv = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
  border: solid black 2px;
`;

const ArtPieceDiv = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const PoemSpan = styled.span`
  background-color: lightcoral;
  border: solid black 2px;
`;

const AnimationDiv = styled.span`
  background-color: lightgreen;
  border: solid black 2px;
`

export type ImageColorPairs = {
  [key: string]: string[];
}

export const PageLayout = () => {
  const [randomImage, setRandomImage] = useState({
    name: "doorway",
    src: doorway
  });
  const [randomBackground, setRandomBackground] = useState("white");
  
  const images = useMemo(() => [
    {
      name: "doorway",
      src: doorway
    },
    {
      name: "mirror",
      src: mirror
    },
    {
      name: "touch",
      src: touch
    }
  ], []);

  const backgrounds: ImageColorPairs = useMemo(() => ({
    doorway: ["#C66D40", "#705E5E", "#4E454F", "#664442", "#232939", "#4B222C"],
    mirror: ["#828894", "#6B6B77", "#CE9781", "#616161", "#3F3F3F", "#727272"],
    touch: ["#787774", "#313332", "#B2B3B3", "#D6A369", "#554631", "#987062"]
  }), []);

  useEffect(() => {
    const randomImageIndex = Math.floor(Math.random() * images.length);
    const newRandomImage = images[randomImageIndex];
    setRandomImage(newRandomImage);

    const backgroundForImage = backgrounds[newRandomImage.name];
    const randomBackgroundIndex = Math.floor(Math.random() * backgroundForImage.length);
    const newRandomBackground = backgroundForImage[randomBackgroundIndex];
    setRandomBackground(newRandomBackground);
  }, [images, backgrounds]);

  return (
    <PageContainerDiv color={randomBackground}>
      <LhsContainerDiv>
        <Title imageName={randomImage.name} background={randomBackground}/>
        <ArtPieceDiv>
          <img src={randomImage.src} alt={"Random"}></img>
        </ArtPieceDiv>
      </LhsContainerDiv>
      <RhsContainerDiv>
        <PoemSpan>Poem here</PoemSpan>
        <AnimationDiv>Animation here</AnimationDiv>
      </RhsContainerDiv>
    </PageContainerDiv>
  )
}
