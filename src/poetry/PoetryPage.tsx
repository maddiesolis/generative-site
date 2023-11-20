import { useEffect, useState } from "react";
import styled from "styled-components";
import doorway from "../images/doorway.png"
import { doorwayBackgroundColors, images, mirrorBackgroundColors, touchBackgroundColors } from "../colors";
import { RussianDoll, VerticalStripesDiv } from "./Stripes";
import { ComboProps } from "../props";
import { Haiku } from "./poems/Haiku";
import { Title } from "./Title";

const TitleDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: end;
  font-size: 6rem;
  font-weight: 700;
  margin: 1rem;
  gap: 1rem;
`;

const PageContainerDiv = styled.div`
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

const PoemDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  padding: 2rem;
  gap: 1rem;
`;

const AnimationDiv = styled.span`
`

export const PoetryPage = () => {
  const [count, setCount] = useState(0)
  const [image, setImage] = useState({
    name: 'doorway',
    src: doorway
  });
  const [background, setBackground] = useState("#717171");
  const [combo, setCombo] = useState<ComboProps>(
    {primary: 'black', secondary: 'black', tertiary: 'black', quaternary: 'black'},
  )

  useEffect(() => {
    const intervalId = setInterval(() => {
      const imageIndex = Math.floor(Math.random() * images.length)
      const selectedImage = images[imageIndex]
      setImage(selectedImage);

      let backgrounds: typeof doorwayBackgroundColors | typeof mirrorBackgroundColors | typeof touchBackgroundColors = [];
      if (selectedImage.name === 'doorway') {
        backgrounds = doorwayBackgroundColors
      } else if (selectedImage.name === 'mirror') {
        backgrounds = mirrorBackgroundColors
      } else if (selectedImage.name === 'touch') {
        backgrounds = touchBackgroundColors
      }
      const backgroundIndex = Math.floor(Math.random() * backgrounds.length)
      const selectedBackground = backgrounds[backgroundIndex].code
      setBackground(selectedBackground)

      const combos = backgrounds[backgroundIndex].combos
      const comboIndex = Math.floor(Math.random() * combos.length)
      const selectedCombo = combos[comboIndex]
      setCombo(selectedCombo)

      setCount(count + 1);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearInterval(intervalId);
  }, [image, count]);

  return (
    <PageContainerDiv color={background}>
      <RussianDoll combo={combo}>
        <LhsContainerDiv>
            <TitleDiv color={combo.primary}>
              <Title image={image.name} combo={combo}/>
            </TitleDiv>
            <ArtPieceDiv>
              <img src={image.src} alt={"Random"}></img>
            </ArtPieceDiv>
            </LhsContainerDiv>
          </RussianDoll>
      <RhsContainerDiv>
        <PoemDiv>
          <Haiku image={image.name} combo={combo}/>
        </PoemDiv>
        <AnimationDiv>
          <VerticalStripesDiv combo={combo} background={background}/>
        </AnimationDiv>
      </RhsContainerDiv>
    </PageContainerDiv>
  )
}
