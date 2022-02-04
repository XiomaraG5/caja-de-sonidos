
import React from 'react';

export const play = (sound) =>{
      const audio = new Audio(sound)
      audio.currentTime =0
      audio.play()
  }
const Teclado = ({teclas})=>{
 
    return (
    <div>
        {
        teclas.map(tecla => (
            <button key={tecla.id}
            className='drum-pad'
             
            onClick={()=>play(tecla.url)}>
                <audio src={tecla.url}
                    className='clip'
                    id={tecla.keyTrigger}>
                        
                </audio>
                 {tecla.keyTrigger}
            </button>
        ))
        }
    </div>
    )
}
export default Teclado
 