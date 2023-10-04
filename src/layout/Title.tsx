import React, { useEffect, useState, useMemo } from "react";
import styled from "styled-components";

interface TitleProps {
    imageName: string;
}

type TitleColors = {
    [key: string]: string[];
}

const TitleContainer = styled.div`
    margin: 1rem;
`

interface TitleSpanProps {
    titleColor: string;
}

const TitleSpan = styled.span<TitleSpanProps>`
  font-size: 100px;
  color: ${props => props.titleColor || 'black'};
`;

export const Title: React.FC<TitleProps> = (props) => {
    const {imageName} = props;
    const [randomTitleColor, setRandomTitleColor] = useState("");

    const titleColors: TitleColors = useMemo(() => ({
        doorway: ["pink", "purple"],
        boat: ["blue", "green"]
    }), []);

    useEffect(() => {
        const colorsForImage = titleColors[imageName];
        const randomIndex = Math.floor(Math.random() * colorsForImage.length);
        setRandomTitleColor(colorsForImage[randomIndex])
    }, [imageName, titleColors]);

    return (
        <TitleContainer>
            <TitleSpan titleColor={randomTitleColor}>{imageName}</TitleSpan>
        </TitleContainer>
    )
}
