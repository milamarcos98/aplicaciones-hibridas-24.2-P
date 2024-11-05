import { useState } from 'react';
import './App.css'
import Button from './components/Button'
import List from './components/List';
import Message from './components/Message'
import Contador from './components/Contador';

function App() {

  const [selectedItem, setSelectedItem ] = useState("");

  const items = [
      {text:  "item1",
  value: "description item1"},
  {text:  "item2",
  value: "description item2"},
  {text:  "item3",
  value: "description item3"},
  {text:  "item4",
  value: "description item4"}
  ];

  const handleClick = () => {
    console.log("button clicked!");
  }
  

  return (
      <div>
        <Contador/>
        {/* <h2>Selected item: {selectedItem}</h2> */}
        {/* <List title="list1" items={items} setSelectedItem={setSelectedItem}/> */}
        {/* <Message>
          <div>
            <h2>Hi</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati doloremque explicabo quisquam, atque consequuntur sed, nisi iure, quasi recusandae deserunt sunt? Ipsam facilis ratione incidunt maiores reiciendis temporibus quaerat iusto.</p>
            </div>
        </Message>
        <Message>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati doloremque explicabo quisquam, atque consequuntur sed, nisi iure, quasi recusandae deserunt sunt? Ipsam facilis ratione incidunt maiores reiciendis temporibus quaerat iusto.</p>
            <img src="https://placehold.co/600x400" alt="" />
        </Message>
        <Button style={{backgroundColor: 'blue', color: 'white'}} texto="Texto del btn" color="secondary" click={handleClick}/>
        <Button texto="Texto del btn 2" color="primary"/> */}
      </div>
  )
}

export default App

// ES7+ React/Redux/React-Native snippets



// COMPONENTE FUNCIONAL
// function App(){
//   return (
//     <div>

//     </div>
//   )
// }

// COMPONENTE DE CLASE
// import React, {Component} from "react";

// class ComponenteClase extends Component{
//   contructor(props){
//     super(props);
//   }

//   render(){
//     return(
//       <div></div>
//     )
//   }
// }