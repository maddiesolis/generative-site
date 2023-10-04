import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import doorway from "../images/doorway.png"
import boat from "../images/boat.png"
import { Title } from "./Title";

const PageContainerDiv = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  height: 100vh;
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

export const PageLayout = () => {
  const [randomImage, setRandomImage] = useState({
    name: "doorway",
    src: doorway
  });
  const images = useMemo(() => [
    {
      name: "doorway",
      src: doorway
    },
    {
      name: "boat",
      src: boat
    }
  ], []);


  useEffect(() => {
    let randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  }, [images]);

  return (
    <PageContainerDiv>
      <LhsContainerDiv>
        <Title imageName={randomImage.name}/>
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
