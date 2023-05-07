import {
  Button,
  CssBaseline,
  GlobalStyles,
  Toolbar,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const paginas = [
    {
      nome: "PÁGINA PRINCIPAL",
      variant: "button",
      color: "text.primary",
      href: "#",
      sx: { my: 1, mx: 1.5 },
      url: "/",
    },
    {
      nome: "GALERIA",
      variant: "button",
      color: "text.primary",
      href: "#",
      sx: { my: 1, mx: 1.5 },
      url: "/galeria",
    },
    {
      nome: "LISTA DE FRUTAS",
      variant: "button",
      color: "text.primary",
      href: "#",
      sx: { my: 1, mx: 1.5 },
      url: "/frutas",
    },
    {
      nome: "AUTOMÓVEIS",
      variant: "button",
      color: "text.primary",
      href: "#",
      sx: { my: 1, mx: 1.5 },
      url: "/automovel",
    },
    {
      nome: "POKÉ-DEX",
      variant: "button",
      color: "text.primary",
      href: "#",
      sx: { my: 1, mx: 1.5 },
      url: "/poke-dex",
    },
    {
      nome: "USUÁRIOS",
      variant: "button",
      color: "text.primary",
      href: "#",
      sx: { my: 1, mx: 1.5 },
      url: "/usuarios",
    },
  ];
  const [paginaAtual, setPaginaAtual] = useState("PÁGINA PRINCIPAL");
  const { pathname } = useLocation();

  useEffect(() => {
    paginas.map((pag) => {
      if (pag.url === pathname) {
        setPaginaAtual(pag.nome);
      }
      return pag;
    });
  }, []);

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
              <Link to={pagina.url} key={pagina.nome}>
                <Button
                  onClick={() => setPaginaAtual(pagina.nome)}
                  variant={pagina.variant}
                  color={pagina.color}
                  sx={pagina.sx}
                >
                  {pagina.nome}
                </Button>
              </Link>
            ))}
          </nav>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
