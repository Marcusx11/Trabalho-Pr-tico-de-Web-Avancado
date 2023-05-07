import {
  Button,
  CssBaseline,
  GlobalStyles,
  Toolbar,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { useState } from "react";

const NavBar = () => {
  const paginas = [
    {
      nome: "PÁGINA PRINCIPAL",
      variant: "button",
      color: "text.primary",
      href: "#",
      sx: { my: 1, mx: 1.5 },
    },
    {
      nome: "GALERIA",
      variant: "button",
      color: "text.primary",
      href: "#",
      sx: { my: 1, mx: 1.5 },
    },
    {
      nome: "LISTA DE FRUTAS",
      variant: "button",
      color: "text.primary",
      href: "#",
      sx: { my: 1, mx: 1.5 },
    },
    {
      nome: "AUTOMÓVEIS",
      variant: "button",
      color: "text.primary",
      href: "#",
      sx: { my: 1, mx: 1.5 },
    },
    {
      nome: "POKÉ-DEX",
      variant: "button",
      color: "text.primary",
      href: "#",
      sx: { my: 1, mx: 1.5 },
    },
  ];
  const [paginaAtual, setPaginaAtual] = useState("PÁGINA PRINCIPAL");

  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            {paginaAtual}
          </Typography>
          <nav>
            {paginas.map((pagina) => (
              <Button
                onClick={() => {}}
                key={pagina.nome}
                variant={pagina.variant}
                color={pagina.color}
                href={pagina.href}
                sx={pagina.sx}
              >
                {pagina.nome}
              </Button>
            ))}
          </nav>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
