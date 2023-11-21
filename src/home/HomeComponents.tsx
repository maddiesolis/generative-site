import styled from "styled-components";

export const PageContainerDiv = styled.div`
    padding: 5%;
`
export const HomeDiv = styled.div`
    display: grid;
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
    color: #18263B;
`