import { NavbarC } from "./components/NavbarC";
import { ThemeProvider } from '@mui/material';
import { theme } from "./theme/theme";


import './styles/index.css';
import { Home } from "./views/Home";
import { Nosotros } from "./views/Nosotros";
import { Perfumes } from "./views/Perfumes";


import { Routes, Route} from "react-router-dom";
import { Contacto } from "./views/Contacto";
import { FooterC } from "./components/FooterC";

export const  CoutivaqApp = () => {

  return (
    <ThemeProvider theme={theme}>
      <NavbarC />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/perfumes" element={<Perfumes/>} />
        <Route path="/contacto" element={<Contacto/>} />
      </Routes>
      <FooterC/>
    </ThemeProvider>
)}


