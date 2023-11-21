import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainerDiv = styled.div`
    align-items: center;
    display: flex;
    justify-content: end;
    height: 54px;
    padding: 20px 48px;
    position: sticky;
    top: 0;
`

export const NavMenuDiv = styled(NavContainerDiv)`
    display: flex;
    justify-content: space-between;
    padding: 0;
    gap: 54px;
`

export const NavMenuLink = styled(Link)`
    text-decoration: none;
    color: #6086BE;
    font-size: 20px;
    line-height: 24px;
    font-weight: 800;
    &:hover {
        color: #aec2de;
        cursor: pointer;
    }
`

const Navbar: React.FunctionComponent = () => {
    return (
        <NavContainerDiv>
            <NavMenuDiv>
                <NavMenuLink to="/">Home</NavMenuLink>
                <NavMenuLink to="/gallery">Gallery</NavMenuLink>
                <NavMenuLink to="/you">You</NavMenuLink>
            </NavMenuDiv>
        </NavContainerDiv>
    );
};

export default Navbar;