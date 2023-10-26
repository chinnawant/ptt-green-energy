
import React from 'react';
import styled from '@emotion/styled'
import { Box, FormControl, Button, Select, MenuItem } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import imageDownload from '../assets/images/download.svg'
import imageChartup from '../assets/images/chartup2.png'
import { useTheme } from '@mui/material/styles';

      

type ControlPanelProps = {
  image?: string;
  handleChange?: any
  year?: string;
  years? : string[];
  pdf?: any;
  presentYear?: any;
};


const ControlPanelContainer = styled.div`
  margin: auto;
  max-width: 60%;
  @media (min-width: 600px) {
    max-width: 80%;
    width: 80%;
  }
   @media (max-width: 599px) {
     max-width: 100%;
     width: 100%;
   }
`;

const ImageDownload = styled.img`
  width: 100%;
  height: 100%;
`


const ControlPanelFrame = styled.div`
display: flex;
justify-content: end;
position: relative;

@media (min-width: 600px) {
  height: 200px;
}
@media (min-width: 1400px) {
  height: 250px;
}
@media (max-width: 600px) {
  flex-direction: column;
}
`;

const BoxImages = styled.div<{ image: string }>`
background-image: url(${(props) => props.image});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
margin: 0  -120px 0 0;
width: 100%;
@media (max-width: 600px) { 
    height: 120px;
 }
`


const BoxContrlller = styled.div`
height: 100%;
width: 100%;
background-image: linear-gradient(to left top, rgb(37, 124, 178) 0px, rgb(37, 124, 178) 50%, transparent 50%, transparent 100%), linear-gradient(to right top, rgb(37, 124, 178) 0px, rgb(37, 124, 178) 100%, transparent 50%, transparent 100%), linear-gradient(rgb(37, 124, 178) 0px, rgb(37, 124, 178) 100%);
background-size: 21% 100%, 21% 100%, 59% 100%;
background-position: left top, right top, center top;
background-repeat: no-repeat;
@media (max-width: 600px) { 
    padding: 10px;
    background: rgb(37, 124, 178);
}
`


const ControlPanel: React.FC<ControlPanelProps> = ({ image = "", handleChange, year, years= [], pdf, presentYear }) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.up('md'));

  const BoxSelected = {
    ...matchesSM && {display: "flex", justifyContent: "center",},

  }

  return (
    <ControlPanelContainer> 

      <ControlPanelFrame >
        <BoxImages image={image}/>
        <BoxContrlller  
          style={{backgroundImage:"linear-gradient(to top left, #257CB2 0 50%, transparent 50% 100%), linear-gradient(to top right, #257CB2 0 100%, transparent 50% 100%), linear-gradient(#257CB2 0 100%)",backgroundSize:"21% 100%, 21% 100%, 59% 100%",backgroundPosition:"left top, right top, center top",backgroundRepeat: "no-repeat"}}  

        >
        
          <Box style={{display:"flex",justifyContent:"center",flexDirection:"column",height:"100%",alignItems:"center"}}>
            <Box>
              <Box width={"30px"} height={"30px"} sx={{...matchesSM && { display: "none" }}}>
                <ImageDownload src={imageChartup}  />
              </Box>
            <Box padding={"10px 0 10px 0"} fontSize={"1.4rem"} sx={{...matchesMD && { fontSize: "1.8rem"}}}  color={"white"}>งบการเงินประจำปี 2565</Box>
              <Box><Button style={{width:"150px",background:"#2FC0F7",display:"flex",justifyContent:"space-between"}} variant="contained"  size={"small"} href={presentYear} target='_blank'>ดาวโหลด PDF
                <Box width={"20px"} height={"20px"}>
                  <ImageDownload src={imageDownload}  />
                </Box>
                </Button></Box>
            </Box>
          </Box>
        </BoxContrlller>
      </ControlPanelFrame>

      <Box display={"flex"} paddingTop={"16px"} alignContent={"center"} justifyContent={"flex-end"} sx={{...BoxSelected}}  >
        <Box display={"flex"} alignItems={"center"} fontSize={"1.2rem"} sx={{...matchesMD && { fontSize: "1.5rem"}}} >  ปี : </Box>
        <Box paddingLeft={"10px"}>
            <FormControl >
              <Select 
                value={year}
                onChange={(event) => handleChange(event.target.value)}
                sx={{
                  width: 100,
                  height: 32,
                  color: '#407D84',
                }}
              >
                {
                  years.map((year: string,index: number) => {
                    return <MenuItem  key={index} value={year}>{year}</MenuItem>
                  }) 
                }
              </Select>
          </FormControl>
        </Box>
        <Box paddingLeft={"10px"}>
          <Button variant="contained" style={{width:"150px",background:"#2FC0F7",display:"flex",justifyContent:"space-between"}} size={"small"} href={pdf} target='_blank'>ดาวโหลด PDF
            <Box width={"15px"} height={"15px"}>
              <ImageDownload src={imageDownload}  />
            </Box>
          </Button>
        </Box>
          
      </Box>
    </ControlPanelContainer>
  );
};

export default ControlPanel;
