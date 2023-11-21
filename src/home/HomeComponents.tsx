import styled from "styled-components";
import { Link } from 'react-router-dom';

export const PageContainerDiv = styled.div`
    padding: 5%;
`
export const HomeDiv = styled.div`
    display: grid;
    /* grid-template-columns: 2fr 1fr; */
    height: 100%;
`
export const HomeLeftSideDiv = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 15%;
`
export const HomeRightSideDiv = styled.div`
    display: flex;
    justify-self: flex-end;
    align-self: flex-end;
    position: relative;
`

export const HomeTitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`
export const IntroSpan = styled.span`
    font-weight: 800;
    font-size: 24px;
    height: 5px;
    color: #6086BE;
`

export const TitleSpan = styled.span`
    font-family: 'Titan One', sans-serif;
    font-weight: 700;
    font-size: 80px;
    line-height: 90px;
    color: #264653;
`
export const DescriptionSpan = styled(IntroSpan)`
    font-weight: 400 !important;
    width: 800px;
    font-size: 26px;
    line-height: 50px;
    margin-top: 20px;
    color: #18263B
`
export const AnimatedButtonDiv = styled.div`
    position: relative;
    width: 300px;
    height: 40px;
    border: 3px solid #3B8EA5;
    filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.15));
`
export const AnimatedButton = styled.button`
    height: 44px;
    width: 304px;
    background-color: #3B8EA5;
    border: none;
    margin-top: -8px;
    margin-left: -8px;
    :hover {
        transform: translateY(2px) translateX(2px);
        cursor: pointer;
    }
`
export const AnimatedButtonLink = styled(Link)`
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #EDF6F9;
    text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
`