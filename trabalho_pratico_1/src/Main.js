import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

import PaginaPrincipal from "./pages/PaginaPrincipal";
import Automovel from "./pages/Automovel/Automovel";
import PokeDex from "./pages/PokeDex";
import Frutas from "./pages/Frutas/Frutas";
import Galeria from "./pages/Galeria";
import Usuarios from "./pages/Api_Usuarios/Usuarios";

function Main() {
	return (
    <Router>
      <CssBaseline />

      <NavBar />

      <Routes>
        <Route element={<PaginaPrincipal />} path="/" exact />
        <Route element={<PokeDex />} path="/poke-dex" />
        <Route element={<Automovel />} path="/automovel" />
        <Route element={<Frutas />} path="/frutas" />
        <Route element={<Usuarios />} path="/usuarios" />
        <Route element={<Galeria />} path="/galeria" />
      </Routes>
    </Router>
  );
}

export default Main