import React from "react";
import { Container, Grid, TextField, FormControl, MenuItem, Select, InputLabel, Button } from "@mui/material";

class Frutas extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            frutas: [],
            frutaSel: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.adicionarFruta = this.adicionarFruta.bind(this);
    }

    handleChange(e) {
        this.setState({
            frutaSel: e.target.value
        });
        alert("Você selecionou a fruta "+e.target.value)
    }

    adicionarFruta() {
        var tfFruta = document.getElementById("tfFruta");
        this.state.frutas.push(tfFruta.value)
        this.setState({
            frutas: this.state.frutas
        });
        tfFruta.value = null;
    }

    render() {
        return (
            <>

                <Container maxWidth="lx" className="conteudo-principal">
                    <h1>LISTA DE FRUTAS</h1>
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

                            <TextField id="tfFruta" label="Informe uma fruta" variant="outlined" size="small" />
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" onClick={this.adicionarFruta}>Adicionar Fruta</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl sx={{ m: 1, minWidth: 360 }} size="small">

                            <InputLabel id="demo-simple-select-label">Frutas</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.frutaSel}
                                label="Frutas"
                                onChange={this.handleChange}
                            >
                                {this.state.frutas.map((fruta, i) =>
                                    <MenuItem key={i}
                                        value={fruta} >{fruta}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </>
        )
    }

}

export default Frutas