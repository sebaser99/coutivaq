import Box from '@mui/material/Box';
import { CarouselC } from '../components/CarouselC';
export const Home = () => {
  return (
    <Box  sx={{marginTop:{xs:'15vh', sm:'13vh'}, padding:{xs: '10px 0', sm: '40px 20px 20px'}, margin: '0 auto', backgroundColor: '#f6fbf4'}}> 
      <CarouselC />
    </Box>
  )
}
