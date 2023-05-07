import React from "react"
import { Container, Grid, FormControl, Select, MenuItem, InputLabel } from "@mui/material";

class Usuarios extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            usuarios: [],
            usuarioSel: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            usuarioSel: e.target.value
        });
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users", {
            "method": "GET",
        })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    usuarios: response,
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <>

                <Container maxWidth="lx" className="conteudo-principal">
                    <h1>LISTA DE USUARIOS</h1>
                </Container>
                        

                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid item xs={3}>
                    <h4>Buscando dados de https://jsonplaceholder.typicode.com/users</h4>
                        <FormControl sx={{ m: 1, minWidth: 480 }} size="small">
                        <InputLabel id="demo-simple-select-label">Usuários</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.usuarioSel}
                                label="Frutas"
                                onChange={this.handleChange}
                            >
                                {this.state.usuarios.map((u) =>
                                    <MenuItem key={"id" + Math.random().toString(16).slice(2)}
                                        value={u["id"]} >{u["name"]}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default Usuarios