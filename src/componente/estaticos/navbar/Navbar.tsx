import React from "react";
import './Navbar.css'

import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToken } from '../../../store/tokens/actions';
import TokenState from "../../../store/tokens/tokenReducer";

function Navbar() {

   
    const navigate = useNavigate()
    const token = useSelector<TokenState,TokenState["tokens"]>(
        (state) =>  state.tokens
    )
const dispacht= useDispatch()


    function goLogaut(){
        dispacht(addToken(''));
        navigate('/login')
    }

    var navbarComponent 
    if (token !== ""){
        navbarComponent= 
        <AppBar position="static" style={{ backgroundColor: "#16A085"}}>
                <Toolbar variant="dense">
                    <Box className='cursor' >
                        <Typography variant="h5" color="inherit" >
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className='cursor'>
                            <Link to= '/home' className="text-decorator-none cursor">
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                          </Link>
                        </Box>
                       
                        <Box mx={1}>
                        <Link to= '/posts' className="text-decorator-none cursor">
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                            </Link>
                        </Box>
                        <Box mx={1} className='cursor'>
                        <Link to= '/temas' className="text-decorator-none cursor">
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                            </Link>
                        </Box>
                        <Box mx={1} className='cursor'>
                        <Link to= '/formularioTema' className="text-decorator-none cursor">
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                            </Link>
                        </Box>
                        <Box mx={1}>
                            <Link to='/Login' className='text-decorator-none'>
                                <Box className='cursor' onClick={goLogaut}>
                                    <Typography variant="h6" color='inherit'>
                                        logout
                                    </Typography>
                                </Box>
                            </Link>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
    }
return (
    <>
        {navbarComponent}
    </>
)
}

export default Navbar;

