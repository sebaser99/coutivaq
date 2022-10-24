import { Box, Container, Typography } from "@mui/material"
import CopyrightIcon from '@mui/icons-material/Copyright';
import { SocialMediaC } from "./SocialMediaC";
import { MenuC } from "./MenuC";

const logoStyle ={
     width:'80px', height:'80px', borderRadius:'50%', display: 'flex',
    justifyContent: 'center', alignItems: 'center', backgroundColor:'common.white'
}
export const FooterC = () => {
  return (
    <Box component='footer' sx={{ backgroundColor:'secondary.main', display: 'flex', flexDirection:'column', justifyContent:'end', paddingTop: 3}}>
        <Container sx={{display:'flex', flexDirection:{xs:'column', sm: 'row'}, alignItems:{sm:'center'}, justifyContent:{sm: 'space-evenly'}}}>
            <Box sx={logoStyle}><img style={{width:'50px'}} src='public/assets/img/logo-cara-hombre.png' alt='cara-hombre'/></Box>
            <MenuC textColor='#fff'/>
            <SocialMediaC/>
            <Box sx={logoStyle}><img style={{width:'45px'}} src='public/assets/img/logo-cara-mujer.png' alt='cara-mujer'/></Box>
        </Container>
        <Typography  sx={{marginTop:'10px'}} variant='subtitle2' color='#f6fbf4' align='center' component='p'><span style={{display:'block',padding:'10px 0', borderTop:'1px solid #fff', maxWidth:'6  0%', margin: '0 auto'}}>Coutivaq Perfumería <CopyrightIcon fontSize='14px'/></span></Typography>
    </Box>
  )
}