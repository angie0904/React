import { useState } from "react"
import Card from "./Card"
import Hijo from "./Hijo";


function App() {
// const [estado,setEstado] =useState(true);
// function cambiar(){
//   setEstado({nombre});
// }
const [nombre,setNombre]=useState("");
let login=(nombre)=>{
  setNombre(nombre);
}

  return (
    <>
      {/* <Card estado={estado}></Card>
      <button onClick={cambiar}>{estado ? "Desactivar" : "Activar"}</button> */}

      <h2>padre y recibo {nombre}</h2>
      
      
      <Hijo trae={login}></Hijo>
    </>
  )
}

export default App
