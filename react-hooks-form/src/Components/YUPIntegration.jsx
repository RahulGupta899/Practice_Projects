import React from 'react'
import {useForm} from 'react-hook-form'
import {DevTool} from '@hookform/devtools'
import {yupResolvers} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const YUPIntegration = () => {

    // DEFINE YUP VALIDATION SCHEMA
    const schema = yup.object({
        username: yup.string().required('Username is Required'),
        email: yup.string().required('Email is Required').email("Email not in valid format"),
        channel: yup.string().required('Channel is Required')
    })


    const form = useForm({
        defaultValues: {
            username: '',
            email: '',
            channel:''
        },
        resolver: yupResolvers(schema)
    })

    const {register,formState,handleSubmit} = form
    const {errors} = formState


    






    const onFormSubmit = (formData)=>{
        console.log("Form Data: ", formData)
    }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
        <div className='form-control'>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' {...register('username')}/>
            <p className='error'>{errors?.username?.message}</p>
        </div>
        <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' {...register('email')}/>
            <p className='error'>{errors?.email?.message}</p>
            
        </div>
        <div className='form-control'>
            <label htmlFor='channel'>Channel</label>
            <input type='text' id='channel' {...register('channel')}/>
            <p className='error'>{errors?.channel?.message}</p>
        </div>

        <button>Submit</button>
    </form>
  )
}

export default YUPIntegration
