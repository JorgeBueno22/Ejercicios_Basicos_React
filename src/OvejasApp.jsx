import { useState } from 'react';
import { ListaOvejas } from './ListaOvejas';

export const OvejasApp = () => {

    const [contador, setContador] = useState(0);

    const [imagenes, setImagenes]=useState([]);

    const onIncrementarContador = () =>{
        setContador(contador+1);
        setImagenes([...imagenes,
          "http://www.clker.com/cliparts/e/4/8/7/13280460782141411990Cartoon%20Sheep.svg.hi.png" ]);
    }

  return (
    <>
     {/* Titulo */}
     <h3 className="title">Contador de ovejas</h3>
     <div className="wrapper">
        {/* contador */}
        <h4 className="counter">{contador}</h4>
        {/* boton */}
        <button className="button"
        onClick={onIncrementarContador}
        > Contar :)</button>

        {/* componente con lista ovejas */}        
        <ListaOvejas imagenes={imagenes}></ListaOvejas>
     </div>

    </>
  )
}
