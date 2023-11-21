import React from 'react';
import styled, { keyframes } from 'styled-components';
import { TitleSpan } from './HomeComponents';

const gradientAnimation = keyframes`
  0% { color: #CF835D; }
  25% { color: #C66C3F; }
  50% { color: #874728; }
  75% { color: #482615; }
  100% { color: #C66C3F; }
`;

const GradientTextSpan = styled(TitleSpan)`
  animation: ${gradientAnimation} 30s linear infinite;
`;

interface GradientTextProps {
    text: string
}
export const GradientText: React.FC<GradientTextProps> = ({text}) => {
  return (
    <GradientTextSpan>
      {text}
    </GradientTextSpan>
  );
};
