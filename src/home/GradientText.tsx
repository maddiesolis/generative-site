import React from 'react';
import styled, { keyframes } from 'styled-components';
import { TitleSpan } from './HomeComponents';

const gradientAnimation = keyframes`
  0% { color: #fc5c7d; }
  25% { color: #6a82fb; }
  50% { color: #fc5c7d; }
  75% { color: #6a82fb; }
  100% { color: #fc5c7d; }
`;

const GradientTextSpan = styled(TitleSpan)`
  animation: ${gradientAnimation} 100s linear infinite;
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
