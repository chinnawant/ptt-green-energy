import { FC } from 'react';
import { Box, Button } from "@mui/material";
import styled from '@emotion/styled'


const ImageDownload = styled.img`
  width: 100%;
  height: 100%;
`

interface DownloadButtonProps {
  href: string;
  imageDownload: string;
  onClick?: Function;
}

const DownloadButton: FC<DownloadButtonProps> = ({ href = '', imageDownload = '', onClick }) => {
  return (
    <Box>
      <Button 
        variant="contained" 
        style={{width:"150px",background:"#2FC0F7",display:"flex",justifyContent:"space-between"}} 
        size={"small"} 
        href={href} 
        target='_blank'
        onClick={onClick as any}
      >
        ดาวโหลด PDF
        <Box width={"20px"} height={"20px"}>
          <ImageDownload src={imageDownload} />
        </Box>
      </Button>
    </Box>
  );
}

export default DownloadButton;