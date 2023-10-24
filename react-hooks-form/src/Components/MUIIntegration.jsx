import React from 'react'
import {DevTool} from '@hookform/devtools'
import { TextField, Button, Stack } from '@mui/material'
import { useForm } from 'react-hook-form'

const MUIIntegration = () => {

    const form = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const { register, handleSubmit, formState: { errors }, control } = form


    const loginSubmit = (formData) => {
        console.log("Form Data: ", formData)
    }


    return (
        <>
            <h1>Login MUI</h1>
            <form noValidate onSubmit={handleSubmit(loginSubmit)}>
                <Stack spacing={2} width={400}>
                    <TextField
                        label='Email'
                        type='email'
                        error={errors?.email?.message}
                        {...register('email', {
                            required: 'Email is required'
                        })}
                        helperText={errors?.email?.message}
                    />
                    <TextField 
                        label='Password' 
                        type='password' 
                        {...register('password', {
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: 'Must be atleast 8 characters'
                        }
                        })}
                        error={errors?.password?.message}
                        helperText={errors?.password?.message}
                     />
                    <Button type='submit' variant='contained' color='primary' >Login</Button>
                </Stack>
            </form>
            <DevTool control={control}/>
        </>
    )
}

export default MUIIntegration
