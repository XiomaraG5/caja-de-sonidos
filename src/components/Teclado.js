
import React, { useEffect } from 'react';


const Teclado = ({teclas})=>{
 useEffect(() => {
   document.addEventListener("click", e=>{
    if(e.target.classList.contains("drum-pad")){
        const child = e.target.querySelector(".clip")
        
        
       child.currentTime =0
       child.play()
       const nombre = child.getAttribute("title")
                document.getElementById("display").innerHTML=nombre
    }
   })
 }, []);
 
    return (
    <div className='contenedorBotones'>
        {
        teclas.map(tecla => (
            
            <button key={tecla.id}
            className='drum-pad'
             id={tecla.url}>
                <audio src={tecla.url}
                title={tecla.id}
                id={tecla.keyTrigger}
                    className='clip'>
                        
                </audio>
                 {tecla.keyTrigger}
            </button>
            
        ))
        }
    </div>
    )
}
export default Teclado
 