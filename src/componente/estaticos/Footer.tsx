import React from "react";
import './Footer.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import { useSelector } from "react-redux";
import TokenState from "../../store/tokens/tokenReducer";



function Footer(){

    const token = useSelector<TokenState,TokenState["tokens"]>(
        (state) =>  state.tokens
    )


    var footerComponent 
    if (token !== ""){
        footerComponent=
  <Grid container direction="row" justifyContent="center" alignItems="center" >
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#16A085", height: "120px"   }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center" style={{background:"#16A085"}}>
                            <Typography variant="h5" align="center" gutterBottom className="cursor">Siga-nos nas redes sociais </Typography>
                        </Box>  
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/generationbrasil" target="_blank">
                                <FacebookIcon className="redes " />
                            </a>
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                <InstagramIcon className="redes"/>
                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#16A085", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2020 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography  variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        }
    return (
        <>

{footerComponent}

  </>
    )
    
}
export default Footer 