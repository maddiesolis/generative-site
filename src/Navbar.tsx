import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainerDiv = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    background-color: white;
    height: 54px;
    padding: 20px 48px;
    position: sticky;
    top: 0;
`

export const NavMenuDiv = styled(NavContainerDiv)`
    display: flex;
    justify-content: space-between;
    padding: 0;
    gap: 48px;
`

export const NavMenuLink = styled(Link)`
    text-decoration: none;
    color: #F07167;
    font-size: 18px;
    line-height: 22px;
    font-weight: 700;
    font-family: 'Titan One', sans-serif;
    :hover {
        color: #c47779;
        cursor: pointer;
    }
`

export const LogoLink = styled(NavMenuLink)`
    font-family: 'Titan One', sans-serif;
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    width: fit-content;
`

const Navbar: React.FunctionComponent = () => {
    return (
        <NavContainerDiv>
            <LogoLink to="/">gallery</LogoLink>
            <NavMenuDiv>
                <NavMenuLink to="/">Home</NavMenuLink>
                <NavMenuLink to="/poetry">Poetry</NavMenuLink>
                <NavMenuLink to="/quiz">Quiz</NavMenuLink>
            </NavMenuDiv>
        </NavContainerDiv>
    );
};

export default Navbar;