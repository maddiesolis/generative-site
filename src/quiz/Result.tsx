import React from 'react'; 
import { TitleH2 } from './Question';
import styled from 'styled-components';

const ArtPieceDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  img {
    width: 35rem;
    height: 35rem;
	border-radius: 4px;
  }
`;

interface ResultProps {
    image: any;
}
export const Result: React.FC<ResultProps> = ({image}) => { 
	return ( 
        <div>
            <TitleH2>Based on your answers, The Cat Sage has rendered an image for you...</TitleH2>
            <ArtPieceDiv>
                <img src={image} alt="Result"></img>
            </ArtPieceDiv>
        </div>
	); 
}; 
