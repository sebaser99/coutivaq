import Box from '@mui/material/Box';
import { CarouselC } from '../components/CarouselC';
export const Home = () => {
  return (
    <Box  sx={{marginTop:{xs:'15vh', sm:'13vh'}, padding:{xs: '10px 0', sm: '20px'}, margin: '0 auto',
    background: 'linear-gradient(90deg, rgba(172,240,192,1) 0%, rgba(225,248,217,1) 30%, rgba(225,248,217,1) 70%, rgba(172,240,192,1) 100%);'}} >
      <CarouselC />
    </Box>
  )
}
