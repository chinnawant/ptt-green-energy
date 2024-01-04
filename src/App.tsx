import React from 'react';
import { Box, Container } from "@mui/material";
import styled from '@emotion/styled'
import { useState, useEffect } from 'react';

// Components
import Header  from "./components/header";
import Banner from "./components/banner";
import ControlPanel from "./components/controlPanel";

// Assets
import ImgLogo from './assets/images/logo.png';
import ImagfinancialReporting from './assets/images/financial-reporting.jpg';
import ImgFinancial from './assets/images/financial-statement.jpg';

// future import it to dynamic
// why import P2564 because it can import 2564 it error
import P2567 from './assets/pdfs/2567.pdf';




function App() {
  const storePdf = [
  { pdf: P2567, name: "เอกสารเผยแพร่ ประจำปีงบประมาณ 2567"},
  { pdf: P2567, name: "เอกสารเผยแพร่ ประจำปีงบประมาณ 2566"},]
  
  const TextSection = styled.div`
    font-size: 1.8rem;
    color: #000;
  `;


  return (
    <>
      <Box height={'100dvh'}  >
        <Header  image={ImgLogo} companyName="PTT Green Energy Pte. Ltd. " ></Header>
        <Banner image={ImagfinancialReporting}/>
        <Container>
          <Box display={"flex"} justifyContent={"center"} padding={"24px"}>
            <TextSection>เอกสารเผยแพร่</TextSection>
          </Box>
          <ControlPanel image={ImgFinancial} storePdf={storePdf}  />
        </Container>
      </Box>
    </>
  );
}

export default App;