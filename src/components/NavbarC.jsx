import Appbar from "@mui/material/Appbar";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from '@mui/material/useMediaQuery';
import {  Link } from "react-router-dom";

import { useState } from "react";
import { DrawerC } from "./DrawerC";


const menuStyle = {
        display:'flex',   
        flexDirection: {
            xs: 'column',
            sm: 'row'
        }
        
}

export const NavbarC = () => {
    const [value, setValue] = useState(0);
    const matches = useMediaQuery('(min-width:600px)');
 
  return (
    <Appbar>
        <Toolbar sx={{display: 'flex', justifyContent:'center', alignItems: 'center', backgroundColor:'#fff' }}  >
            <Box sx={{...menuStyle, width: '100%', maxWidth: '1040px', justifyContent: {sm: 'space-between'}, alignItems: {xs: 'left', sm:'center'} }} >
                <Box  sx={{ padding: '10px 0 0' , width: {xs: 250, sm: 200 }}}>
                    <img src='assets/img/logo-nombre.png' alt='logo' 
                    />
                </Box>
              {
                matches && (
                    <Tabs
                        textColor='inherit'     
                        value={value}
                        indicatorColor={matches ? 'secondary' : ''}
                        onChange={(e, value)=>setValue(value)}
                        orientation={matches ? 'horizontal' : 'vertical'}
                    >
                        <Tab label='Home' component={Link}  to='/'/>
                        <Tab label='Nosotros' component={Link}  to='/nosotros' />
                        <Tab label='Perfumes' component={Link}  to='/perfumes' />  
                        
                    </Tabs>
                )
              }
                  
               

            </Box>
        </Toolbar>
        <DrawerC/>
    </Appbar>
  )
}
