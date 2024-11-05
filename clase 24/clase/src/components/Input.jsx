import React from 'react'
import { useFormContext } from 'react-hook-form'

const Input = () => {
    const {register, formState: {errors}} = useFormContext()
  return (
    <div>
        <input {
            ...register("age", {
                required: "age is required"
            })
        } />
        {errors.age && <span>{errors.age.mesage}</span>}
    </div>
  )
}

export default Input