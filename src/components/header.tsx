
import React from 'react';
import styled from '@emotion/styled'

interface Props {
  width?: number;
  height?: number;
  image?: string;
  companyName?: string;
}

const HeaderContainer = styled.div`
  padding: 12px;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
  }
`;
const LogoImage = styled.img`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  `;
  
  const LogoTitle = styled.h1`
    font-size: 2.6rem;
    color: #4E5511;
    padding-left: 2%;
    @media (max-width: 600px) {
      display: none;
    }
  `;
  
  



const Header: React.FC<Props> = ({ width = 60, height = 60, image = '', companyName = '' }) => {
  return (
    <HeaderContainer>
        <LogoImage src={image} width={width} height={height} />
        <LogoTitle>{companyName}</LogoTitle>
    </HeaderContainer>
  );
};


export default Header;