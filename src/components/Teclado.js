
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
            id={tecla.keyTrigger} 
            onClick={()=>play(tecla.url)}>
                <audio src={tecla.url}
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
 