
import React from 'react';
import styled from '@emotion/styled'
import {  Grid } from "@mui/material";
import imageDownload from '../assets/images/download.svg'
import DownloadButton from './downloadButton'

      

type ControlPanelProps = {
  image: string;
  storePdf?: Array<any>;
};


const ControlPanelContainer = styled.div`
  margin: auto;
  @media (min-width: 768px) {
    max-width: 100%;
    width: 100%;
  }

  @media (min-width: 1024px) {
    max-width: 75%;
    width: 75%;
  }
`;





const ControlPanel: React.FC<ControlPanelProps> = ({ image = "", storePdf = [] }) => {
  return (
    <ControlPanelContainer> 
      <Grid container spacing={2}>
        
        {storePdf.map((item, index) => {
          return (
            <Grid item xs={12} sm={6} key={index}>
              <DownloadButton  id={`pdfSelected-${index}`} name={item.name} href={item.pdf} imageDownload={imageDownload} />
            </Grid>
          )
        })}

      </Grid>
    </ControlPanelContainer>
  );
};




export default ControlPanel;
