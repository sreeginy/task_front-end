import React from 'react'
import './Hero.css'
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Hero = () => {

  const navigate = useNavigate();

  const handleConsultationClick = () => {
    navigate('/get-free-consultation');
  };

  return (

    <div className='hero section'>
      <div className='box-align'>
      <Box
          height={306}
          width={630}
          my={4}
          display="flex"
          flexDirection="column" 
          alignItems="flex-start"
          gap={4}
          p={2}
          className="box"
        >
        <Box className='box-text'>
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
        </Box>
        <Box alignSelf="flex-start">
    
        <Button variant="contained" className="button" onClick={handleConsultationClick}>
          GET FREE CONSULTATION
        </Button>
        
     </Box>
</Box>
</div>
    </div>

  )
}

export default Hero
