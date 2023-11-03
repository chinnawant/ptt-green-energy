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
import P2565 from './assets/pdfs/2565.pdf';
import P2564 from './assets/pdfs/2564.pdf';
import P2563 from './assets/pdfs/2563.pdf';
import P2562 from './assets/pdfs/2562.pdf';
import P2561 from './assets/pdfs/2561.pdf';




function App() {
  const currentYear = new Date().getFullYear() - 1 + 543;
  const storeData = Array.from({length: 5}, (_, i) => (currentYear - i).toString());
  const StorePdf: any = { P2565, P2564, P2563, P2562, P2561 }
  const [year,setYear] = useState("2565");
  const [pdf,setPdf] = useState(StorePdf.P2564);

  
  useEffect(() => {
    setPdf(StorePdf['P'+year]);
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
            <TextSection>งบการเงินล่าสุด</TextSection>
          </Box>
          <ControlPanel image={ImgFinancial} defalutValue={year} dropdown={storeData} presentYear={StorePdf['P2565']}  selectedPDF={pdf}  handleChange={setYear}  />
        </Container>
      </Box>
    </>
  );
}

export default App;