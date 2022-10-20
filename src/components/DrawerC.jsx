
import  IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import {  Link } from "react-router-dom";


export const DrawerC = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const matches = useMediaQuery('(min-width:600px)');
  const routes = [{ruta:'/', nombre: 'Home'}, {ruta:'/nosotros', nombre: 'Nosotros'}, {ruta:'/perfumes', nombre: 'Perfumes'} ]
  return (
    <>
      <Drawer open={openDrawer} onClose={()=> setOpenDrawer(false)}>
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
      {
        !matches &&  (
          <IconButton onClick={()=> setOpenDrawer(!openDrawer)}
            sx={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              fontSize: '35px',
              color: '#000'

            }}
            size='large'
          >
            <MenuIcon/>
        </IconButton>)
      }
      
      

    </>
  )
}
