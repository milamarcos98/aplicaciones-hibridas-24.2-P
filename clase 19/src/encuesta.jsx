import { useState } from 'react'

const encuesta = () => {
    const [votos, setVotos] = useState({
        opcion1: 0,
        opcion2: 0,
        opcion3: 0
      })
    
      // destructuring
      // spread operator
      const votar = (opcion) => {
        setVotos({
          ...votos,
          [opcion]: votos[opcion] + 1
        })
      }
    
      const total = votos.opcion1 + votos.opcion2 + votos.opcion3;
  return (
    <div>
        <h1>Encuesta</h1>

<button onClick={() => votar("opcion1")}>Opcion 1</button>
<button onClick={() => votar("opcion2")}>Opcion 2</button>
<button onClick={() => votar("opcion3")}>Opcion 3</button>

<h2>Resultados:</h2>
<p>Opcion 1 - {votos.opcion1} votos - {((votos.opcion1 / total) * 100).toFixed(2)} </p>
<p>Opcion 2 - {votos.opcion2} votos - {((votos.opcion2 / total) * 100).toFixed(2)}</p>
<p>Opcion 3 - {votos.opcion3} votos - {((votos.opcion3 / total) * 100).toFixed(2)}</p>
<p>Total de votos: {total} </p>
    </div>
  )
}

export default encuesta