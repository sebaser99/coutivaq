
import {  Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';

const routes = [{ruta:'/coutivaq/', nombre: 'Home'}, {ruta:'/coutivaq/nosotros', nombre: 'Nosotros'}, {ruta:'/coutivaq/perfumes', nombre: 'Perfumes'}, {ruta:'/coutivaq/contacto', nombre: 'Contáctenos'} ]

export const MenuC = ({textColor='secondary'} ) => {
    const [value, setValue] = useState(0);
    const matches = useMediaQuery('(min-width:600px)');
    return (
        <Tabs
            textColor='inherit'     
            value={value}
            indicatorColor={matches ? 'secondary' : ''}
            onChange={(e, value)=>setValue(value)}
            orientation={matches ? 'horizontal' : 'vertical'}
            sx={{color:`${textColor}`, margin: {xs: '0 auto', md: '0'}}}
        >
        {
            routes.map(({nombre, ruta}, i) =>(
            <Tab label={nombre} component={Link} key={i}  to={ruta}/>

            ))
        }
            
            
        </Tabs>
    )
}
