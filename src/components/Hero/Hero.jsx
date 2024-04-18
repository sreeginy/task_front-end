import React from 'react'
import './Hero.css'
import { Box, Button } from '@mui/material';


const Hero = () => {
  return (

    <div className='hero section'>
      
      <Box
  height={306}
  width={630}
  my={4}
  display="flex"
  flexDirection="column" // Set flex direction to column
  alignItems="flex-start" // Align items to start (left)
  gap={4}
  p={2}
  className="box"
>
  <Box>
    We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
  </Box>
  <Box alignSelf="flex-start"> {/* Align button to end (right) */}
    <Button variant="contained" className="button">
      GET FREE CONSULTATION
    </Button>
  </Box>
</Box>




    </div>

  )
}

export default Hero
