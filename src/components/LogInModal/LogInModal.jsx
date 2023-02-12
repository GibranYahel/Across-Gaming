import React from 'react'
import css from './LogIn.module.css'
import { Grid,TextField, Typography } from '@mui/material'

export const LogInModal = () => {
  return (
    <div className={css.ModalContainer}>
        <div className={css.LogContainer}>
            <Grid item
            className={css.BoxShadow}
            xs={ 3 }
            sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}
            >

                <Typography variant='h5' sx={{ mb: 1 }} >Registrate</Typography>
                <Grid>
                  <TextField 
                    label="correo"
                    type="email"
                    placeholder='Ejemplo_00@gmail.com'
                  />
                </Grid>
                <hr />
                <Grid>
                  <TextField 
                    label="Contraseña"
                    type="text"
                    placeholder='Ejemplo_2123'
                  />
                </Grid>
                    
            </Grid>
        </div>
    </div>
  )
}
