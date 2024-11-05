import React, { useState } from 'react'

const Form = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const errorMessage = loginValidation(email, password);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="email" placeholder='email' value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
        <p>{errorMessage}</p>
        <button disabled={errorMessage} type='submit'>Login</button>
    </form>
  )
}

const loginValidation = (email, password) => {
    if(!email.includes('@')) return 'Email incorrecto';
    if(password.length < 4) return 'Password incorrecto';
}

export default Form