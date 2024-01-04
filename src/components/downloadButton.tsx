import React from 'react';
import { useTheme } from '@mui/material/styles';

import { Box, Button } from "@mui/material";
import styled from '@emotion/styled'
import useMediaQuery from '@mui/material/useMediaQuery';


const ImageDownload = styled.img`
  width: 100%;
  height: 100%;

`

interface DownloadButtonProps {
  href: string;
  imageDownload: string;
  id: string,
  name?: string;
  onClick?: Function;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ href = '', imageDownload = '', id = "", onClick, name = "Default value " }) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Box >
      <Button 
        id={id}
        variant="contained" 
        style={{width: "100%", height: "100%", display: "flex", justifyContent: "space-between", fontSize:"1rem"}} sx={{...matchesSM && {fontSize: "0.8rem"}}}
        size={"medium"} 
        href={href} 
        target='_blank'
        onClick={onClick as any}
      >
        {name}
        <Box width={"20px"} height={"20px"}>
          <ImageDownload src={imageDownload} />
        </Box>
      </Button>
    </Box>
  );
}

export default DownloadButton;