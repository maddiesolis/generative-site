import { GenerateHaikuProps, HaikuProps } from "../../props";
import styled from "styled-components";
import { DoorwayHaikuOptions, MirrorHaikuOptions, TouchHaikuOptions } from "./haikus";
import { useEffect, useState } from "react";

const Line1Span = styled.span`
    font-size: 50px;
    font-weight: 700;
    color: ${props => props.color};
`

const Line2Span = styled.span`
    font-size: 50px;
    font-weight: 700;
    color: ${props => props.color};
`

const Line3Span = styled.span`
    font-size: 50px;
    font-weight: 700;
    color: ${props => props.color};
`

export const Haiku: React.FC<GenerateHaikuProps> = ({ 
    combo,
    image
}) => {

  const [line1, setLine1] = useState('')
  const [line2, setLine2] = useState('')
  const [line3, setLine3] = useState('')

  useEffect(() => {
    const haikuOptions = image === 'doorway' ? DoorwayHaikuOptions :
                        image === 'mirror' ? MirrorHaikuOptions :
                        image === 'touch' ? TouchHaikuOptions : DoorwayHaikuOptions;

    const line1Options = haikuOptions.find((item) => item.name === 'line1')?.options || [];
    const line2Options = haikuOptions.find((item) => item.name === 'line2')?.options || [];
    const line3Options = haikuOptions.find((item) => item.name === 'line3')?.options || [];

    const getRandomLine = (options: string[]) => {
        const randomIndex = Math.floor(Math.random() * options.length);
        return options[randomIndex];
    };

    const selectedLine1 = getRandomLine(line1Options)
    const selectedLine2 = getRandomLine(line2Options)
    const selectedLine3 = getRandomLine(line3Options)

    setLine1(selectedLine1);
    setLine2(selectedLine2);
    setLine3(selectedLine3);
  }, [image]);

  if (image === 'doorway') {
    return (
        <DoorwayHaiku combo={combo} line1={line1} line2={line2} line3={line3}/>
    )
  }

  if (image === 'mirror') {
    return (
        <MirrorHaiku combo={combo} line1={line1} line2={line2} line3={line3}/>
    )
  }

  if (image === 'touch') {
    return (
        <TouchHaiku combo={combo} line1={line1} line2={line2} line3={line3}/>
    )
  }

  return (
    <MirrorHaiku combo={combo} line1={line1} line2={line2} line3={line3}/>
  )
}

const DoorwayHaiku: React.FC<HaikuProps> = ({ 
    combo,
    line1,
    line2,
    line3
}) => {
      return (
        <>
            <Line1Span color={combo.primary}>It was {line1}</Line1Span>
            <Line2Span color={combo.secondary}>{line2}</Line2Span>
            <Line3Span color={combo.tertiary}>{line3}</Line3Span>
        </>
      )
}

const MirrorHaiku: React.FC<HaikuProps> = ({ 
    combo,
    line1,
    line2,
    line3
}) => {
      return (
        <>
            <Line1Span color={combo.primary}>{line1}</Line1Span>
            <Line2Span color={combo.secondary}>{line2}</Line2Span>
            <Line3Span color={combo.tertiary}>{line3}</Line3Span>
        </>
      )
}

const TouchHaiku: React.FC<HaikuProps> = ({ 
    combo,
    line1,
    line2,
    line3
}) => {
      return (
        <>
            <Line1Span color={combo.primary}>Wonder is a {line1}</Line1Span>
            <Line2Span color={combo.secondary}>It has {line2}</Line2Span>
            <Line3Span color={combo.tertiary}>{line3}</Line3Span>
        </>
      )
}