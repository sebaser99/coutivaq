import { Box, Container, Typography } from "@mui/material"
import CopyrightIcon from '@mui/icons-material/Copyright';
import { SocialMediaC } from "./SocialMediaC";
import { MenuC } from "./MenuC";
import useMediaQuery from '@mui/material/useMediaQuery';

const logoStyle ={
     width:'80px', height:'80px', borderRadius:'50%', display: 'flex',
    justifyContent: 'center', alignItems: 'center', backgroundColor:'common.white'
}
export const FooterC = () => {
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <Box component='footer' sx={{ backgroundColor:'secondary.main', display: 'flex', flexDirection:'column', justifyContent:'end', paddingTop: 3}}>
        <Container sx={{display:'flex', flexDirection:{xs:'column', sm: 'row'}, alignItems:{sm:'center'}, justifyContent:{sm: 'space-between'}}}>
            {matches &&  <Box sx={logoStyle}><img style={{width:'50px'}} src='https://res.cloudinary.com/react-journal-sebaser/image/upload/v1666631020/logo-cara-hombre_cykhad.png' alt='cara-hombre'/></Box> }
            <Box sx={{display: 'flex', flexDirection:{xs:'column', md: 'row', width:{xs:'auto',  md: '70%'}}}}>
              <MenuC textColor='#fff'/>
              <SocialMediaC/>
            </Box>
            {matches && <Box sx={logoStyle}><img style={{width:'45px'}} src='https://res.cloudinary.com/react-journal-sebaser/image/upload/v1666631020/logo-cara-mujer_ev1wwq.png' alt='cara-mujer'/></Box> }
        </Container>
        <Typography  sx={{marginTop:'10px'}} variant='subtitle2' color='#f6fbf4' align='center' component='p'><span style={{display:'block',padding:'10px 0', borderTop:'1px solid #fff', maxWidth:'60%', margin: '0 auto'}}>Coutivaq Perfumería <CopyrightIcon fontSize='14px'/></span></Typography>
    </Box>
  )
}
