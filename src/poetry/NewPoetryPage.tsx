import Navbar from "../Navbar"
import { PageContainerDiv } from "../home/HomeComponents"
import { LayoutDiv } from "../home/HomePage"
import styled from "styled-components"
import sample1 from '../images/sample1.png';
import sample2 from '../images/sample2.png';
import sample3 from '../images/sample3.png';
import sample4 from '../images/sample4.png';

const PoetryContainerDiv = styled(LayoutDiv)`
    padding: 0 5%;
    height: 100%;
`
const PoetryGridDiv = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    height: 100%;
    position: relative;
`
const LeftDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: repeat(2, 1fr);
    height: 100%;
`
const GridElementDiv = styled.div`
    border: 2px solid purple;
    margin: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    border-radius: 4px;
    img {
        width: 100%;
        height: 100%;
        /* width: 20rem;   // uncomment for fixed size
        height: 20rem; */
    }
`
const SplitRectangleDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
`
export const NewPoetryPage: React.FC = () => {
    return(
        <LayoutDiv>
            <Navbar/>
            <PoetryContainerDiv>
                <PoetryGridDiv>
                    <LeftDiv>
                        <GridElementDiv>
                            <img src={sample1} alt="Sample1"></img>
                        </GridElementDiv>
                        <SplitRectangleDiv>
                            <GridElementDiv>2</GridElementDiv>
                            <GridElementDiv>
                                <img src={sample3} alt="Sample1"></img>
                            </GridElementDiv>
                        </SplitRectangleDiv>
                        <GridElementDiv>4</GridElementDiv>
                        <GridElementDiv>5</GridElementDiv>
                    </LeftDiv>
                    <GridElementDiv>6</GridElementDiv>
                </PoetryGridDiv>
            </PoetryContainerDiv>
        </LayoutDiv>
    )
}