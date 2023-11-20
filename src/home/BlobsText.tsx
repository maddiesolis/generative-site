import styled, { keyframes } from "styled-components";

const blobsAnimation = keyframes`
  0% { border-radius: 26% 74% 61% 39% / 54% 67% 33% 46%; }
  10% { border-radius: 74% 26% 47% 53% / 68% 46% 54% 32%; }
  20% { border-radius: 48% 52% 30% 70% / 27% 37% 63% 73%; }
  30% { border-radius: 73% 27% 57% 43% / 28% 67% 33% 72%; }
  40% { border-radius: 63% 37% 56% 44% / 25% 28% 72% 75%; }
  50% { border-radius: 39% 61% 70% 30% / 61% 29% 71% 39%; }
  60% { border-radius: 27% 73% 29% 71% / 73% 51% 49% 27%; }
  70% { border-radius: 39% 61% 65% 35% / 74% 65% 35% 26%; }
  80% { border-radius: 55% 45% 37% 63% / 38% 30% 70% 62%; }
  90% { border-radius: 25% 75% 70% 30% / 39% 50% 50% 61%; }
  100% { border-radius: 66% 34% 33% 67% / 65% 73% 27% 35%; }
`
const ContainerDiv = styled.div`
  position: relative;
  width: 320px;
  height: 320px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const TitleH1 = styled.h1`
  background: #fff;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  font-family: 'Titan One', cursive;
  font-size: 90px;
  font-weight: 700;
  flex-flow: row wrap;
  align-content: center;
  justify-content: center;

  span {
    width: 100%;
    position: relative;

    &:before {
      content: '';
      background: linear-gradient(45deg, #fc5c7d, #6a82fb, #fc5c7d);
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      mix-blend-mode: screen;
    }
  }
`
const Blob = styled.div<{ top: string; left: string; bgColor: string; size: string }>`
  mix-blend-mode: color;
  animation: ${blobsAnimation} 15s ease-in-out infinite alternate;
  background: ${({ bgColor }) => bgColor};
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
`;

export const Title: React.FC = () => {
    return (
        <ContainerDiv>
            <TitleH1>
                <span>cat sage gallery</span>
            </TitleH1>
            <Blob top="90px" left="210px" bgColor="#ff1493" size="60px" className="blobs_1" />
            <Blob top="155px" left="230px" bgColor="#ff4500" size="80px" className="blobs_2" />
            <Blob top="145px" left="20px" bgColor="#00ff00" size="60px" className="blobs_3" />
            <Blob top="115px" left="100px" bgColor="#ff0000" size="100px" className="blobs_4" />
            <Blob top="55px" left="70px" bgColor="#ffff00" size="50px" className="blobs_5" />
            <Blob top="220px" left="55px" bgColor="#00ffff" size="60px" className="blobs_6" />
            <Blob top="210px" left="180px" bgColor="#ff8c00" size="50px" className="blobs_7" />
        </ContainerDiv>
    );
};