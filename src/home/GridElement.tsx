import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import sample1 from "../images/sample1.png";
import sample2 from "../images/sample2.png";

const FadeOutAnimation = keyframes`
  from { opacity: 1.0; }
  to { opacity: 0.0; }
`;

const Stage = styled.div`
  margin: 1em auto;
  width: 382px;
  height: 292px;
  position: relative;
`;

const ImageLink = styled.a<{ delay: number }>`
  position: absolute;
  opacity: 1.0;
  animation-name: ${FadeOutAnimation};
  animation-delay: ${({ delay }) => `${delay}s`};
  animation-duration: 2s;
  z-index: 20;
`;

const Image = styled.img`
    width: 12rem;
    height: 12rem;
    border-radius: 4px;
`;

export const GridElement: React.FC = () => {
  useEffect(() => {
    const stage = document.getElementById('stage');
    const fadeComplete = () => {
      stage?.appendChild(arr[0]);
    };
    const arr = Array.from(stage?.getElementsByTagName('a') ?? []);

    arr.forEach((item, index) => {
      item.addEventListener('animationend', fadeComplete, false);
      item.setAttribute('style', `animation-delay: ${4 + index}s`);
    });

    return () => {
      arr.forEach((item) => {
        item.removeEventListener('animationend', fadeComplete);
      });
    };
  }, []);

  return (
    <Stage>
      <ImageLink href="1.jpg" delay={4}>
        <Image src={sample1} />
      </ImageLink>
      <ImageLink href="2.jpg" delay={5}>
        <Image src={sample2} />
      </ImageLink>
    </Stage>
  );
};
