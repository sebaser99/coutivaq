import { Box, Container, IconButton, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export const SocialMediaC = () => {
  const icons = {color:'common.white', fontSize:'30px'}
  return (
    <Box sx={{display: 'flex', flexDirection: {xs: 'row', md: 'column'}, alignItems:'center', justifyContent:{xs:'center'}, marginTop:{xs: '50px', sm: '0'}}}>
      <Typography color='common.white' align='center'>Síguenos</Typography>
      <Box>
        <IconButton target="_blank" href='https://www.facebook.com/CautivatuesenciaSR/' ><FacebookIcon  sx={icons} /></IconButton> 
        <IconButton target="_blank" href='https://www.instagram.com/coutivaq/'><InstagramIcon sx={icons}/></IconButton> 
      </Box>
    </Box>
  )
}
