import React from 'react';
import styled from 'styled-components';
import { ComboProps } from '../props';

const NestedBorderBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const BorderSquare = styled.div`
  border-top: 7px solid ${({ color }) => color};
  border-right: 7px solid ${({ color }) => color};
  width: calc(100% - 5px);
  height: calc(100% - 5px);
  margin-top: 0.4rem;
  margin-right: 0.4rem;
  display: flex;
`;

interface RussianDollProps {
    combo: ComboProps
    children?: React.ReactNode
}

export const RussianDoll: React.FC<RussianDollProps> = ({ combo, children }) => {
    const colors = [combo.primary, combo.secondary, combo.tertiary, combo.quaternary];
    const recursiveSquare = (level: number): JSX.Element => {
        if (level === 0) {
          return <BorderSquare color={colors[0]}>{children}</BorderSquare>;
        }
    
        const colorIndex = level % colors.length;
    
        return (
          <BorderSquare color={colors[colorIndex]}>
            {recursiveSquare(level - 1)}
          </BorderSquare>
        );
    };
    return (
        <NestedBorderBox>
            {recursiveSquare(15)}
        </NestedBorderBox>
    );
}

export const VerticalStripesDiv = styled.div<{ combo: ComboProps, background: string }>`
  height: 100%;
  background: repeating-linear-gradient(
    to right,
    ${({ combo }) => combo.primary} 0, ${({ combo }) => combo.primary} 7px,
    ${({ background }) => background} 7px, ${({ background }) => background} 14px,
    ${({ combo }) => combo.secondary} 14px, ${({ combo }) => combo.secondary} 21px,
    ${({ background }) => background} 21px, ${({ background }) => background} 28px,
    ${({ combo }) => combo.tertiary} 28px, ${({ combo }) => combo.tertiary} 35px,
    ${({ background }) => background} 35px, ${({ background }) => background} 42px,
    ${({ combo }) => combo.quaternary} 42px, ${({ combo }) => combo.quaternary} 49px,
    ${({ background }) => background} 49px, ${({ background }) => background} 56px
  );
`;
