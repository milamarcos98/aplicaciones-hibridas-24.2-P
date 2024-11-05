import React from 'react'
import Input from './components/Input'
import Address from './components/Address'
import { useForm, FormProvider } from 'react-hook-form'

const Form = () => {
    const methods = useForm({
        mode: "onBlur"
    })
  return (
    <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit()}>
            <label htmlFor="">Nombre</label>
            <input type="text" {
                ...methods.register("name",  {
                    required: "Name is required"
                })
            } />
            {methods.formState.errors.name && <span> {methods.formState.errors.name.message}</span>}
            <Input/>
            <Address/>
        </form>
        </FormProvider>
  )
}

export default Form