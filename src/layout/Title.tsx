import styled from "styled-components";
import { TitleProps } from "../props";

const TitlePart1Span = styled.span`
    color: ${props => props.color};
`

const TitlePart2Span = styled.span`
    color: ${props => props.color};
`

export const Title: React.FC<TitleProps> = ({ image, combo }) => {
    const part1 = image === 'doorway' ? 'Doorway' :
                        image === 'mirror' ? 'Looking' :
                        image === 'touch' ? 'Touch' : 'Untitled';
    const part2 = image === 'doorway' ? '' :
                        image === 'mirror' ? 'Glass' :
                        image === 'touch' ? '' : 'Untitled';
    return (
        <>
            <TitlePart1Span color={combo.primary}>Cat Sage</TitlePart1Span>
            <TitlePart2Span color={combo.secondary}>Gallery</TitlePart2Span>
        </>
    )
}
