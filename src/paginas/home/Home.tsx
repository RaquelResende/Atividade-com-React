import React, { useEffect } from "react";
import "./Home.css"
import {Typography, Grid, Button} from '@material-ui/core';
import {Box} from '@mui/material';
import { url } from "inspector";
import TabPostagem from "../../componente/postagens/tabPostagem/TabPostagem";

import { useNavigate } from "react-router-dom";
import ModalPostagem from "../../componente/postagens/modalPostagem/ModalPostagem";
import { useSelector } from "react-redux";
import TokenState from "../../store/tokens/tokenReducer";
import { toast } from "react-toastify";


function Home(){
    let navigate = useNavigate();
    const token = useSelector<TokenState,TokenState["tokens"]>(
    (state)=>  state.tokens
    )

    
    useEffect(() => {
      if (token == "") {
        toast.info('Você precisa está logado', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
          navigate("/login")
  
      }
  }, [token])



    return (
        <>
  <Grid container direction="row" justifyContent="center" alignItems="center" style={ {backgroundImage:`url("https://img.freepik.com/vetores-gratis/tons-de-verde-degrade-de-fundo_23-2148364585.jpg?w=2000")`}}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Box >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="font.t" >Seja bem vindo(a)!</Typography>
                        </Box>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "grey", fontWeight: "bold" }}>Deixe um relato para nossa comunidade</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        <ModalPostagem />
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#3F51B5", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12}  style={{ backgroundColor: "white" }}>
                <TabPostagem/>
                </Grid>
            
               

               

            </Grid>
        </>
        
    );
}
export default Home