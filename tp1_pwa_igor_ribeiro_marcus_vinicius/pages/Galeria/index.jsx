import {
  Button,
  Card,
  CardHeader,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import { useState } from "react";
import "./index.css";

const Galeria = () => {
  const [numeroGaleria, setNumeroGaleria] = useState();
  const [imagens, setImagens] = useState([]);

  const carregaImagem = (numImagem) => {
    const newImg = {
      id: numImagem,
    };
    setImagens((prevImgs) => {
      return [...prevImgs, newImg];
    });
  };

  const deletaImagem = (numImagem) => {
    setImagens(imagens.filter((i) => i.id !== numImagem))
  };

  console.log(imagens);

  return (
    <>
      <Container
        maxWidth="md"
        component="main"
        className="galeria"
        sx={{ padding: "10px" }}
      >
        <Grid container alignItems="flex-end">
          {imagens.map((i, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Card sx={{ padding: "10px" }}>
                <CardHeader
                  title={"Imagem " + i.id}
                  titleTypographyProps={{ align: "center" }}
                  sx={{
                    color: "black",
                  }}
                />
                <img
                  src={"galeria/" + i.id + ".jpg"}
                  alt={i.id}
                  width="250"
                  height="200"
                />
              </Card>
            </Grid>
          ))}
        </Grid>

        <div>
          <TextField
            margin="normal"
            required
            id="numeroGaleria"
            label="Selecione um Número"
            name="numeroGaleria"
            autoFocus
            sx={{ padding: "10px" }}
            onChange={(e) => setNumeroGaleria(e.target.value)}
          />
        </div>
        <Button
          variant="contained"
          onClick={() => carregaImagem(numeroGaleria)}
        >
          Carregar Imagem
        </Button>
        <Button
          variant="contained"
          onClick={() => deletaImagem(numeroGaleria)}
          color="error"
        >
          Remover Imagem
        </Button>
      </Container>
    </>
  );
};

export default Galeria;
