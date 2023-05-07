import React from "react";
import { TextField, Grid, FormControl, Button } from "@mui/material";

class AutomovelChild extends React.Component {
  constructor(props) {
    super(props);
    this.adicionarAutomovel = this.adicionarAutomovel.bind(this);
    this.alteraAutomovel = this.alteraAutomovel.bind(this);
    this.deletaAutomovel = this.deletaAutomovel.bind(this);
    this.handleImage = this.handleImage.bind(this);
  }

  adicionarAutomovel(e) {
    var tfAutomovel = document.getElementById("tfAutomovel");
    this.props.adicionaAutomovel(tfAutomovel.value);
    tfAutomovel.value = "";
  }

  alteraAutomovel(e) {
    this.props.alteraAutomovel(e);
  }

  deletaAutomovel() {
    this.props.deletaAutomovel(this.props.automovel);
  }

  handleImage() {
    alert("Este carro é um " + this.props.automovel);
  }

  render() {
    return (
      <>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={3}>
            <FormControl sx={{ m: 1, minWidth: 360 }} size="small">
              {this.props.automovel != null ? (
                <h4>Isto é um {this.props.automovel}</h4>
              ) : (
                <div></div>
              )}
							{console.log(this.props.automovel)}
              {this.props.automovel != null ? (
                <img
                  src={require("../../images/" + this.props.automovel + ".jpg")}
                  width="350.0"
                  onClick={this.handleImage}
                  alt={this.props.automovel}
                />
              ) : (
                <div></div>
              )}
              <br></br>
              <table>
                <tbody>
                  <tr>
                    {this.props.automoveis.map((a, i) =>
                      a !== this.props.automovel ? (
                        <td key={i}>
                          <Button
                            onClick={() => this.alteraAutomovel(a)}
                            variant="outlined"
                          >
                            {a}
                          </Button>
                        </td>
                      ) : (
                        <td key={i}></td>
                      )
                    )}
                  </tr>
                </tbody>
              </table>
              <br></br>

              <TextField
                id="tfAutomovel"
                label="Informe um automóvel"
                variant="outlined"
                size="small"
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" onClick={this.adicionarAutomovel}>
              Adicionar Automóvel
            </Button>
            <span> </span>
            <Button
              variant="contained"
              onClick={this.deletaAutomovel}
              color="error"
            >
              Remover Automóvel
            </Button>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default AutomovelChild;
