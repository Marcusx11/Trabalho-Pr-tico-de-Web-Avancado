import { Container } from "@mui/material";
import React from "react";
import "./index.css";

const PaginaPrincipal = () => {
  return (
    <>
      <Container maxWidth="lx" className="conteudo-principal">
        <h1>ESTA É A PÁGINA PRINCIPAL!!</h1>
        <h3>
          Para navegar nas demais páginas, clique nos botões presentes na Barra
          de Navegação do topo da página.
        </h3>
      </Container>
    </>
  );
};

export default PaginaPrincipal;
