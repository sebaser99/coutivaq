import Appbar from "@mui/material/Appbar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";

export const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (e)=> {
        console.log(e.currentTarget)
        setAnchorEl(e.currentTarget)
    }
    const handleClose = ()=> {
        setAnchorEl(null)
    }
  return (
    <Appbar>
        <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                
            </IconButton>
            <Typography variant='h6' component='div' sx={{flexGrow:1}}>Coutivaq</Typography>
            <Stack direction='row' spacing={2}>
                <Button color='inherit'>Home</Button>
                <Button color='inherit'>Nosotros</Button>
                <Button color='inherit'>Perfumes</Button>  
                
            </Stack>
        </Toolbar>
    </Appbar>
  )
}
