import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import doorway from "../images/doorway.png"
import { doorwayBackgroundColors, images, mirrorBackgroundColors, touchBackgroundColors } from "../colors";
import { RussianDoll, VerticalStripesDiv } from "./StripedRectangle";
import { ComboProps } from "./Props";

export interface StyledComponentProps {
  color: string;
}

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
`

const TitleSpan = styled.span<StyledComponentProps>`
  display: flex;
  justify-content: start;
  align-items: end;
  font-size: 7rem;
  color: ${props => props.color || 'black'};
  font-weight: 700;
  margin: 1rem;
`;

const PageContainerDiv = styled.div<StyledComponentProps>`
  display: grid;
  grid-template-columns: 70% 30%;
  height: 100vh;
  background-color: ${props => props.color};
  overflow: hidden;
`;

const LhsContainerDiv = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const RhsContainerDiv = styled.div`
  display: grid;
  grid-template-rows: 60% 40%;
  max-height: 100vh;
`;

const ArtPieceDiv = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

const PoemSpan = styled.span`
`;

const AnimationDiv = styled.span`
`

export const PageLayout = () => {
  const [image, setImage] = useState({
    name: 'doorway',
    src: doorway
  });
  const [background, setBackground] = useState("#717171");
  const [combo, setCombo] = useState<ComboProps>(
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
      <RussianDoll combo={combo}>
        <LhsContainerDiv>
            <TitleSpan color={combo.primary}>Primary</TitleSpan>
            <ArtPieceDiv>
              <img src={image.src} alt={"Random"}></img>
            </ArtPieceDiv>
            </LhsContainerDiv>
          </RussianDoll>
      <RhsContainerDiv>
        <PoemSpan>
          
        </PoemSpan>
        <AnimationDiv>
          {/* <Stripes combo={combo}/> */}
          <VerticalStripesDiv combo={combo} background={background}/>
        </AnimationDiv>
      </RhsContainerDiv>
    </PageContainerDiv>
  )
}
