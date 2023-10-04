import React, { useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import { StyledComponentProps } from "./Layout";

interface TitleProps {
    imageName: string;
    background: string;
}

type TitleColors = {
    [key: string]: string[];
}

const TitleContainer = styled.div`
    margin: 1rem;
`

const TitleSpan = styled.span<StyledComponentProps>`
  font-size: 100px;
  color: ${props => props.color || 'black'};
`;

export const Title: React.FC<TitleProps> = (props) => {
    const {imageName} = props;
    const [randomTitleColor, setRandomTitleColor] = useState("");

    const titleColors: TitleColors = useMemo(() => ({
        doorway: ["pink", "lightpink"],
        mirror: ["coral", "lightcoral"],
        touch: ["green", "gray"]
    }), []);

    useEffect(() => {
        const colorsForImage = titleColors[imageName];
        const randomIndex = Math.floor(Math.random() * colorsForImage.length);
        setRandomTitleColor(colorsForImage[randomIndex])
    }, [imageName, titleColors]);

    return (
        <TitleContainer>
            <TitleSpan color={randomTitleColor}>{imageName}</TitleSpan>
        </TitleContainer>
    )
}
