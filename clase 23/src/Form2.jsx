import React, { useState } from 'react'
import FormInput from './FormInput';

const Form2 = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleOnChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const inputs = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            placeholder: 'username',
            errorMessage: 'Username should be 4-20 ch and no special characters.',
            label: 'Username',
            required: true, 
            pattern: "^[A-Za-z0-9]{4,20}$"
        },
        {
            id: 2,
            name: 'email',
            type: 'email',
            placeholder: 'email',
            errorMessage: 'email should be a valid address',
            label: 'email',
            required: true, 
            pattern: "[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+"
        },
        {
            id: 3,
            name: 'birthday',
            type: 'date',
            placeholder: 'birthday',
            label: 'birthday'
        },
        {
            id: 4,
            name: 'password',
            type: 'password',
            placeholder: 'password',
            errorMessage: 'password should be bwn 8-20, and...',
            label: 'password',
            required: true, 
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`
        },
        {
            id: 5,
            name: 'confirmPassowrd',
            type: 'passowrd',
            placeholder: 'confirmPassowrd',
            errorMessage: 'passowrds dont match.',
            label: 'confirmPassowrd',
            required: true, 
            pattern: values.password
        }
    ]

  return (
    <div>
        <form onSubmit={handleSubmit}>
            {
                inputs.map((input) => (
                    <FormInput
                    key={input.id}
                    value={values[input.name]}
                    handleOnChange={handleOnChange}
                    {...input}
                    />
                ))
            }
        </form>

    </div>
  )
}

export default Form2