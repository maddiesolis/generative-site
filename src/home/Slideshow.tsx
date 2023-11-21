import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import blank_sample from "../images/blank_sample.png"

const fadeInOutAnimation = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;
const FadeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const FadeImage = styled.img<{ seconds: number}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  animation: ${fadeInOutAnimation} ${(props) => props.seconds}s ease-in-out infinite;
`;
export const GridElementDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  border-radius: 4px;
  margin: 1rem;
  img {
    /* width: 30rem;
    height: 30rem; */
    /* width: 100%;
    height: 100%; */
  }
`

interface SlideShowProps {
    images: any[];
    seconds: number;
}
export const Slideshow: React.FC<SlideShowProps> = ({ images, seconds }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const fadeInTimer = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, seconds * 1000); // Change image every 'seconds' seconds
      
        return () => clearInterval(fadeInTimer);
      }, [images.length, seconds]);

    return (
        <GridElementDiv>
            <FadeContainer>
              <BackgroundImage src={images[0]} alt="Background Image" />
              <FadeImage src={images[currentImageIndex]} alt="Fading Image" seconds={seconds}/>
            </FadeContainer>
        </GridElementDiv>
    );
};
