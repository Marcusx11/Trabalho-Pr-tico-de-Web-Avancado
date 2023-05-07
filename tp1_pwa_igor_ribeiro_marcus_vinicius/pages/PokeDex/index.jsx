import { useEffect, useState } from "react";
import { getAllPokemonData } from "../../services/poke-api";
import Container from "@mui/material/Container";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import "./index.css";

const PokeDex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isBuscandoPokemons, setIsBuscandoPokemons] = useState(true);
  async function getAllPokemons() {
    await getAllPokemonData().then((res) => {
      setPokemons(res);
      setIsBuscandoPokemons(false);
    });
  }

  useEffect(() => {
    getAllPokemons();
  }, []);

  if (isBuscandoPokemons) {
    return (
      <>
        <div className="carregando-pokemons">
          <h2>Buscando pokémons...</h2>
          <CircularProgress />
        </div>
      </>
    );
  }

  return (
    <>
      <Container maxWidth="md" component="main" sx={{padding: "10px"}}>
        <Grid container spacing={5} alignItems="flex-end">
          {pokemons.map((p) => (
            <Grid item key={p.name} xs={12} md={4}>
              <Card
                className="poke-card"
                sx={{
                  backgroundColor: p.color,
                }}
              >
                <CardHeader
                  title={p.name}
                  titleTypographyProps={{ align: "center" }}
                  sx={{
                    color: "black",
                  }}
                />
                <CardMedia
                  component="img"
                  height="300"
                  image={p.urlImg}
                  alt="green iguana"
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography
                      component="h4"
                      variant="h5"
                      color="text.secondary"
                    >
                      {p.tipo2 ? p.tipo1 + "/" + p.tipo2 : p.tipo1}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default PokeDex;
