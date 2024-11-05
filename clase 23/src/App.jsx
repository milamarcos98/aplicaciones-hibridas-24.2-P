import { useRef, useState } from 'react'
import './App.css'
import Form from './Form';
import Form2 from './Form2';
import Form3 from './Form3';

function App() {

  // formularios

  // controlados
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  // no controlados - DOM

  // useRef 
  // const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputRef.current.value)
    console.log(inputValue)
  }

  return (
    // <form  onSubmit={handleSubmit}>
    //   <input type="text" onChange={handleInputChange} value={inputValue} />
    //   {/* <input type="text" ref={inputRef} /> */}
    //   <button type='submit'>Enviar</button>
    // </form>
    <Form3/>
  )
}

export default App
