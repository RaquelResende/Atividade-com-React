import { Button, Grid } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { Grid3x3 } from '@mui/icons-material'
import { Box } from '@mui/material'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


import { login } from '../../services/Service'
import UserLogin from '../../modelo/UserLogin'
import './Login.css'

import { addToken } from '../../store/tokens/actions'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

function Login() {
const navigate = useNavigate()

const dispacht = useDispatch() 
 const [token, setToken ] = useState("")

const [userLogin, setUserLogin] = useState  <UserLogin>({

usuario: '',
senha:''


})
function updateModel(e:ChangeEvent<HTMLInputElement>){

    setUserLogin({
        ... userLogin,
        [e.target.name]: e.target.value
    })
}
useEffect(()=>{
    if(token !=''){
        dispacht(addToken(token)) 
        navigate('/home')
    }
},[token])

async function onSubmit(e:ChangeEvent<HTMLFormElement>){
    e.preventDefault()
console.log(Object.values(userLogin))
 try{
    await login('/auth/logar',userLogin,setToken)
    toast.success('🦄 Usuario logado com sucesso!', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

}catch(erro){
  
    toast.error('Dados inconsistêntes', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

}

}
    return (

        <>
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid alignItems='center' xs={6}>
                    <Box paddingX={20}>
                        <form onSubmit={onSubmit}>
                            <Typography variant='h3' component='h3' gutterBottom color='textPrimary' align='center' className='texto1'>Entrar
                            </Typography>

                            <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>)=> updateModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth></TextField >

                            <TextField value= {userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>)=> updateModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' fullWidth type='password'></TextField>

                            <Box marginTop={2} textAlign='center'>
                                                    
                               
                                <Button  className=' text-decorator-none'type='submit' variant='contained' color='primary'>Logar</Button>
                                
                               

                            </Box>
                        </form>

                        <Box display='flex' justifyContent='center' marginTop={2}>

                            <Box marginRight={1}>

                                <Typography variant='subtitle1' gutterBottom align='center' >Não tem conta? </Typography>

                                <Typography variant='subtitle1' gutterBottom align='center' className='texto1'>Cadastre-se </Typography>

                            </Box>

                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} className='imagem'></Grid>
            </Grid>

        </>

    )

    }
export default Login;