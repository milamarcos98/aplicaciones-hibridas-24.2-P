import React, { useState } from 'react'
import Button from './Button'

const Contador = () => {
    const [ contador, setContador ] = useState(0);

    const incrementar = () => {
        setContador(contador + 1)
    }

    const decrementar = () => {
        setContador(contador - 1)
    }

    const resetear = () => {
        setContador(0)
    }
  return (
    <div>
        <h3>Counter: {contador}</h3>
        <div>
            <Button texto="Incrementar" click={incrementar}/>
            <Button texto="Decrementar" click={decrementar}/>
            <Button texto="Resetear" click={resetear}/>
        </div>
    </div>
  )
}

export default Contador