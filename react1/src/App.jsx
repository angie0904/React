// import Botton from "./componets/Botton"
import { useState } from "react";
import Hijo from "./componets/Hijo";
import Card from "./componets/Card"
// import { Contacto } from "./componets/Contacto"
// import Home from "./componets/Home"


function App() {
  // let estilo={
  //   backgroundColor:"crimson",
  //   color:"white"
  // }
  // let datos=[
  //   {
  //     id:0,
  //     titulo:"Toni de la Rosa",
  //     img:"https://randomuser.me/api/portraits/men/31.jpg",
  //     content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui repellat cum asperiores necessitatibus soluta dignissimos voluptates, perferendis nam facilis fuga ut cupiditate molestiae aspernatur eum deleniti, magnam laudantium provident voluptas."
  //   },
  //   {
  //     id:1,
  //     titulo:"Rosa",
  //     img:"https://randomuser.me/api/portraits/women/84.jpg",
  //     content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui repellat cum asperiores necessitatibus soluta dignissimos voluptates, perferendis nam facilis fuga ut cupiditate molestiae aspernatur eum deleniti, magnam laudantium provident voluptas."
  //   },
  //   {
  //     id:2,
  //     titulo:"Rosa",
  //     img:"https://randomuser.me/api/portraits/women/9.jpg",
  //     content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui repellat cum asperiores necessitatibus soluta dignissimos voluptates, perferendis nam facilis fuga ut cupiditate molestiae aspernatur eum deleniti, magnam laudantium provident voluptas."
  //   }
  // ]



  // let [contador,setContador]=useState(0);
  // function inc (){
  //  setContador(contador+1);
  // }

  // function dinc (){
  //   setContador(contador-1);
  //  }
  // function cambiar(signo){
  //   if(signo==="+"){

  //     setContador(contador+1)
  //   }
  //   if(signo==="-"){
  //     setContador(contador-1)
  //   }
  // }
  let [color,setColor] = useState("none");
  function colores(color) {
    if (color === "Azul") {
      setColor("blue")
    }
    if (color === "Rojo") {
      setColor("red") 
    }
  }
  return (
    <>
      {/* <Home/> */}
      {/* <Contacto/> */}
      {/* <Botton/> */}
      {/* {
      datos.map(dato=>{
        return <Card key={dato.id} titulo={dato.titulo} img={dato.img} content={dato.content}></Card>
      })
     } */}
      {/* <p>{contador}</p>
     <button onClick={()=>cambiar("+")}>+</button>
     <button onClick={()=>cambiar("-")}>- </button> */}


      <button onClick={() => colores("Azul")}>azul</button>
      <button onClick={() => colores("Rojo")}>Rojo</button>

      <Hijo color={color}></Hijo>

    </>
  )
}

export default App
