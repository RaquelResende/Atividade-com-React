import { Button, Grid } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { Grid3x3 } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'
import './Login.css'

function Login() {
    return (

        <>
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid alignItems='center' xs={6}>
                    <Box paddingX={20}>
                        <form>
                            <Typography variant='h3' component='h3' gutterBottom color='textPrimary' align='center'>Entrar
                            </Typography>
                            <TextField id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth></TextField >

                            <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' fullWidth type='password'></TextField>

                            <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='contained' color='primary'>Logar</Button>

                            </Box>
                        </form>

                        <Box display='flex' justifyContent='center' marginTop={2}>

                            <Box marginRight={1}>

                                <Typography variant='subtitle1' gutterBottom align='center'>Não tem conta?</Typography>

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