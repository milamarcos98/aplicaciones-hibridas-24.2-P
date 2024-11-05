import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useForm} from "react-hook-form"
import Form from './Form'
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"

// YUP 

const schema = yup.object().shape({
  nombre: yup.string().required("name is required"),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().min(3).required(),
  password: yup.string().min(4).max(20).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password")], "passwords distintos").required()
})


function App() {
  const [isCheckingEmail, setIsCheckingEmail] = useState(false)
  const [isEmailValid, setIsEmailValid] = useState(false)
  
  const checkEmailTaken = async (email) => {
    const takenEmails = ["test@gmail.com", "user@gmai.com"];
    return new Promise((resolve) => setTimeout(() => resolve(takenEmails.includes(email)), 2000))
  }

  const {register, watch, formState: {errors}, handleSubmit, reset} = useForm({
    defaultValues: {
      nombre: "",
      email: "",
      fechaNacimiento: "",
      password: "",
      confirmPassword: "",
      pais: "ar"
    },
    mode: "onBlur", //trigger validation
    resolver: yupResolver(schema)
  })

// console.log(errors.nombre)
  // console.log(watch("password"))

  const password = useRef(null)
  password.current = watch("password")

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  return (
    // <Form/>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="">Nombre</label>
        <input type="text" name="nombre"
        {...register("nombre")}
         />
        {errors.noombre && <span>{errors.noombre.message}</span>}
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input type="email" name="email" 
        {...register("email", {
          required: {
            value: true,
            message: "Email es requerido"
          },
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Correo no valido"
          },
          validate: {
            emailTaken: async (value) => {
              setIsCheckingEmail(true)
              const isTaken = await checkEmailTaken(value);
              setIsCheckingEmail(false)
              !isTaken  && setIsEmailValid(true)
              return !isTaken || "email in use!"
            }
          }
        })}
         />
         {isCheckingEmail && <p>checking email...</p>}
         {isEmailValid && <p>valid email</p>}
         {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <label htmlFor="">Fecha de nacimiento</label>
        <input type="date" name="fechaNacimiento"
        {
          ...register("fechaNacimiento", {
            required: {
              value: true,
              message: "Fecha es requerido"
            },
            validate: (value) => {
              const fechaNacimiento = new Date(value);
              const fechaActual = new Date();
              const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
              return edad >= 18 || "Debes ser mayor de edad"
            }
          })
        }
         />
         {errors.fechaNacimiento && <span>{errors.fechaNacimiento.message}</span>}
      </div>
      <div>
        <label htmlFor="">password</label>
        <input type="password" name="password"
         {
          ...register("password", {
            required: {
              value: true,
              message: "Fecha es requerido"
            },
            minLength: 6
          })
        }
         />
      </div>
      <div>
        <label htmlFor="">confirm password</label>
        <input type="password" name="confirmPassword"
         {
          ...register("confirmPassword", {
            required: {
              value: true,
              message: "Fecha es requerido"
            },
            validate: (value) => {
              value === password.current || "Las contraseñas no coinciden"
            }
          })
        }
         />
      </div>
      <div>
        <label htmlFor="">Pais:</label>
        <select name="pais" id="pais"  {
          ...register("pais")
        }>
          <option value="mx">Mexico</option>
          <option value="co">Colombia</option>
          <option value="ar">Argentina</option>
        </select>
        {
          watch("pais") === "ar" && (
            <input 
            type='text'
            placeholder='Provincia'
            {
              ...register("provincia", {
                required: true
              })
            }
            />
          )
        }
      </div>
      <button type='submit'>Enviar</button>
{/* 
      <pre style={{width: "400px"}}>
        {
          JSON.stringify(watch())
        }
      </pre> */}
    </form>
  )
}

export default App
