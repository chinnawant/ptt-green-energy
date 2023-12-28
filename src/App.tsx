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
  const storeData = ["2567"];
  const storePdf: any = { P2567 }
  const [year,setYear] = useState(storeData[0]);
  const [pdf,setPdf] = useState(storePdf[storeData[0]]);

  
  useEffect(() => {
    setPdf(storePdf['P'+year]);
  }
  , [year]);
  
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
            <TextSection>แผนการจัดซื้อจัดจ้าง</TextSection>
          </Box>
          <ControlPanel image={ImgFinancial} defalutValue={year} dropdown={storeData} presentYear={storePdf[`P${storeData[0]}`]}  selectedPDF={pdf}  handleChange={setYear}  />
        </Container>
      </Box>
    </>
  );
}

export default App;