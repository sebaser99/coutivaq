import Appbar from "@mui/material/Appbar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from '@mui/material/useMediaQuery';


import { DrawerC } from "./DrawerC";
import { MenuC } from "./MenuC";


const menuStyle = {
        display:'flex',   
        flexDirection: {
            xs: 'column',
            sm: 'row'
        }
        
}

export const NavbarC = () => {
    
  const matches = useMediaQuery('(min-width:600px)');
    
 
  return (
    <Appbar>
        <Toolbar sx={{display: 'flex', justifyContent:'center', alignItems: 'center',  background: 'linear-gradient(90deg, rgba(172,240,192,1) 0%, rgba(225,248,217,1) 30%, rgba(225,248,217,1) 70%, rgba(172,240,192,1) 100%)' }}  >
            <Box sx={{...menuStyle, width: '100%', maxWidth: '1040px', justifyContent: {sm: 'space-between'}, alignItems: {xs: 'left', sm:'center'} }} >
                <Box  sx={{ padding: '10px 0 0' , width: {xs: 250, sm: 200 }}}>
                    <img src='https://res.cloudinary.com/react-journal-sebaser/image/upload/v1666631020/logo-nombre_jeplit.png' alt='logo' 
                    />
                </Box>
              {
                matches && (
                    <MenuC/>
                )
              }
                  
               

            </Box>
        </Toolbar>
        <DrawerC/>
    </Appbar>
  )
}
