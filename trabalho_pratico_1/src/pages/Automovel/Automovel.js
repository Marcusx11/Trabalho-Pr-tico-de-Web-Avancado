import React from "react";
import { Container, Grid, FormControl } from "@mui/material";
import AutomovelChild from "./AutomovelChild";

class Automovel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      automoveis: [],
      automovelSel: null,
    };
    this.adicionaAutomovel = this.adicionaAutomovel.bind(this);
    this.alteraAutomovel = this.alteraAutomovel.bind(this);
    this.deletaAutomovel = this.deletaAutomovel.bind(this);
  }

  adicionaAutomovel(a) {
    var automoveisAdd = this.state.automoveis;
    if (automoveisAdd.includes(a)) {
      alert("Este carro já foi adicionado");
      return;
    }
    automoveisAdd.push(a);
    this.setState({
      automoveis: automoveisAdd,
    });
  }

  alteraAutomovel(a) {
    this.setState({
      automovelSel: a,
    });
  }

  deletaAutomovel(a) {
    var automoveisAdd = this.state.automoveis;
    automoveisAdd.splice(automoveisAdd.indexOf(a), 1);
    var newSel = null;
    if (automoveisAdd.length > 0) {
      newSel = automoveisAdd[0];
    }
    this.setState({
      automoveis: automoveisAdd,
      automovelSel: newSel,
    });
  }

  render() {
    return (
      <>
        <Container maxWidth="lx" className="conteudo-principal">
          <h1>AUTOMOVEL</h1>
        </Container>

        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={3}>
            <FormControl sx={{ m: 1, minWidth: 360 }} size="small">
              {this.state.automovelSel != null ? (
                <h3>É um {this.state.automovelSel}</h3>
              ) : (
                <div></div>
              )}
              <AutomovelChild
                automovel={this.state.automovelSel}
                automoveis={this.state.automoveis}
                adicionaAutomovel={this.adicionaAutomovel}
                alteraAutomovel={this.alteraAutomovel}
                deletaAutomovel={this.deletaAutomovel}
              />
            </FormControl>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Automovel;
