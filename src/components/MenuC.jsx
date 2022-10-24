
import {  Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';

const routes = [{ruta:'/', nombre: 'Home'}, {ruta:'/nosotros', nombre: 'Nosotros'}, {ruta:'/perfumes', nombre: 'Perfumes'}, {ruta:'/contacto', nombre: 'Contáctenos'} ]

export const MenuC = ({textColor='secondary'}) => {
    const [value, setValue] = useState(0);
    const matches = useMediaQuery('(min-width:600px)');
    return (
        <Tabs
            textColor='inherit'     
            value={value}
            indicatorColor={matches ? 'secondary' : ''}
            onChange={(e, value)=>setValue(value)}
            orientation={matches ? 'horizontal' : 'vertical'}
            sx={{color:`${textColor}`}}
        >
        {
            routes.map(({nombre, ruta}) =>(
            <Tab label={nombre} component={Link}  to={ruta}/>

            ))
        }
            
            
        </Tabs>
    )
}
