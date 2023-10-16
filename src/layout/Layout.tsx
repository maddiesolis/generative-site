import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import doorway from "../images/doorway.png"
import mirror from "../images/mirror.png"
import touch from "../images/touch.png"
import { Title } from "./Title";
import { doorwayBackgroundColors, images, mirrorBackgroundColors, touchBackgroundColors } from "../colors";

export interface StyledComponentProps {
  color: string;
}

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
`

const TitleSpan = styled.span<StyledComponentProps>`
  font-size: 50px;
  color: ${props => props.color || 'black'};
`;

const PageContainerDiv = styled.div<StyledComponentProps>`
  display: grid;
  grid-template-columns: 60% 40%;
  height: 100vh;
  background-color: ${props => props.color};;
`;

const LhsContainerDiv = styled.div`
  display: grid;
  grid-template-rows: 40% 60%;
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
  border: solid black 2px;
`;

const AnimationDiv = styled.span`
  border: solid black 2px;
`

export type ImageColorPairs = {
  [key: string]: string[];
}

export const PageLayout = () => {
  const [image, setImage] = useState({
    name: 'doorway',
    src: doorway
  });
  const [background, setBackground] = useState("#717171");
  const [combo, setCombo] = useState(
    {primary: 'black', secondary: 'black', tertiary: 'black', quaternary: 'black'},
  )

  useEffect(() => {
    const imageIndex = Math.floor(Math.random() * images.length)
    const selectedImage = images[imageIndex]
    setImage(selectedImage)  // might need to make this a variable first then pass it in

    let backgrounds: typeof doorwayBackgroundColors | typeof mirrorBackgroundColors | typeof touchBackgroundColors = [];
    if (selectedImage.name == 'doorway') {
      backgrounds = doorwayBackgroundColors
    } else if (selectedImage.name == 'mirror') {
      backgrounds = mirrorBackgroundColors
    } else if (selectedImage.name == 'touch') {
      backgrounds = touchBackgroundColors
    }
    const backgroundIndex = Math.floor(Math.random() * backgrounds.length)
    const selectedBackground = backgrounds[backgroundIndex].code
    setBackground(selectedBackground)

    const combos = backgrounds[backgroundIndex].combos
    const comboIndex = Math.floor(Math.random() * combos.length)
    const selectedCombo = combos[comboIndex]
    setCombo(selectedCombo)
  }, []);

  return (
    <PageContainerDiv color={background}>
      <LhsContainerDiv>
      <TitleContainer>
            <TitleSpan color={combo.primary}>Primary</TitleSpan>
            <TitleSpan color={combo.secondary}>Secondary</TitleSpan>
            <TitleSpan color={combo.tertiary}>Tertiary</TitleSpan>
            <TitleSpan color={combo.quaternary}>Quaternary</TitleSpan>
        </TitleContainer>
        <ArtPieceDiv>
          <img src={image.src} alt={"Random"}></img>
        </ArtPieceDiv>
      </LhsContainerDiv>
      <RhsContainerDiv>
        <PoemSpan>Poem here</PoemSpan>
        <AnimationDiv>Animation here</AnimationDiv>
      </RhsContainerDiv>
    </PageContainerDiv>
  )
}
