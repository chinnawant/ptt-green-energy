
import React from 'react';
import styled from '@emotion/styled'

type BannerProps = {
  image: string;
};


const BannerContainer = styled.div<{ image: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 200px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  
  @media(max-width: 426px){
    height: 125px;
  }

  @media(max-width: 320px){
    height: 100px;
  }
  
  @media(min-width: 1440px){
    height: 300px;
  }
  
`;

const BannerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
`;


const Banner: React.FC<BannerProps> = ({ image = '' }) => {
  return (
    <BannerContainer image={image}>
      <BannerContent> </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
