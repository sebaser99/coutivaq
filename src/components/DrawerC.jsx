
import  IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from "react";
import {  Link } from "react-router-dom";


export const DrawerC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);


  const routes = [{ruta:'/', nombre: 'Home'}, {ruta:'/nosotros', nombre: 'Nosotros'}, {ruta:'/perfumes', nombre: 'Perfumes'} ]
  return (
    <>
      <Drawer open={openDrawer} sx={{display:{sm:'none'}}} onClose={()=> setOpenDrawer(false)}>
        <List>
          {routes.map(route => (
            <ListItemButton key={route.ruta} component={Link} to={route.ruta} onClick={()=>setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText >{route.nombre}</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          ))
          }
        </List>
      </Drawer>
      
      
        <IconButton onClick={()=> setOpenDrawer(!openDrawer)}
          sx={{
            display:{xs: 'block', sm:'none'},
            position: 'absolute',
            top: '15px',
            right: '5px',

          }}
          
        >
          <MenuIcon sx={{fontSize:'50px'}} color='secondary'/>
      </IconButton>
    </>
  )
}
