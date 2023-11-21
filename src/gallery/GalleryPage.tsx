import Navbar from "../Navbar"
import { LayoutDiv } from "../home/HomePage"
import styled from "styled-components"
import { Slideshow } from "../home/Slideshow";
import { GradientBackground } from "./GradientBackground";
import { WordFlicker } from "../home/WordFlicker";
import { series1, series2, series3, series4, series5, series6, series7 } from "../quiz/AnswerCombos";
import { useEffect, useState } from "react";

const GalleryPageDiv = styled(LayoutDiv)`
    padding: 0 5%;
    height: 100vh;
`
const OuterGridDiv = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    height: 100%;
`
const LeftGridDiv = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: repeat(2, 350px);
    @media (min-width: 1600px) {
        grid-template-rows: repeat(2, 440px);
    }
`
const RightGridDiv = styled.div`
    display: grid;
    height: 700px;
    @media (min-width: 1600px) {
        height: 880px;
    }
`
const SplitRectangleDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`
const FlickerTextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 40px;
    padding: 28px 1rem 40px 1rem;
`
const GradientWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
`
export const GalleryPage: React.FC = () => {
    // Initialize display objects {images, colors}
    const [display1, setDisplay1] = useState(series1)
    const [display2, setDisplay2] = useState(series4)
    const [display3, setDisplay3] = useState(series6)
    // Specify series options for each display
    const display2Options = [series1, series2, series3]
    const display1Options = [series4, series5]
    const display3Options = [series6, series7]

    useEffect(() => {
        // Randomize chosen series within display options
        const display1Index = Math.floor(Math.random() * display1Options.length)
        const display2Index = Math.floor(Math.random() * display2Options.length)
        const display3Index = Math.floor(Math.random() * display3Options.length)
        // Set selected display
        const selectedDisplay1 = display1Options[display1Index]
        setDisplay1(selectedDisplay1);
        const selectedDisplay2 = display2Options[display2Index]
        setDisplay2(selectedDisplay2);
        const selectedDisplay3 = display3Options[display3Index]
        setDisplay3(selectedDisplay3);
        // Console logs
        console.log('display 1', display1)
        console.log('display 2', display2)
        console.log('display 3', display3)
    })
    return(
        <LayoutDiv>
            <Navbar/>
            <GalleryPageDiv>
            <OuterGridDiv>
                <LeftGridDiv>
                    <SplitRectangleDiv>
                        {/* Display 1 */}
                        <Slideshow images={display1.images} seconds={22}/>
                        <FlickerTextBox>
                            <WordFlicker textArray={["How would you describe yourself?", "How would others describe you?"]} delay={100} color={display1.colors.primary}/>
                            <WordFlicker textArray={["How would you visualise yourself?", "What does it mean to visualise yourself?", "What criteria do you use to evaluate yourself?"]} delay={240} color={display1.colors.secondary}/>
                            <WordFlicker textArray={["Is there a realm that represents you?", "Can you picture a realm that represents you?"]} delay={848} color={display1.colors.tertiary}/>
                            <WordFlicker textArray={["What shapes represent you?", "What colours represent you?"]} delay={53} color={display1.colors.quaternary}/>                            </FlickerTextBox>
                    </SplitRectangleDiv>
                    {/* Display 2 */}
                    <Slideshow images={display2.images} seconds={10}/>
                    {/* Display 3 */}
                    <GradientWrapper><GradientBackground colors={display3.colors}/></GradientWrapper>
                    <Slideshow images={display3.images} seconds={34}/>
                </LeftGridDiv>
                {/* Display 2 */}
                <RightGridDiv>
                    <GradientWrapper><GradientBackground colors={display2.colors}/></GradientWrapper>
                </RightGridDiv>
            </OuterGridDiv>
            </GalleryPageDiv>
        </LayoutDiv>
        
    )
}