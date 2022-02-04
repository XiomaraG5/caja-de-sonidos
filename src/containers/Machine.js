import React, { useState } from 'react';
import Teclado, { play } from '../components/Teclado';
import { BankOne, BankTwo } from '../data/Data';

const Machine = ()=>{
    const [data,setData]= useState(BankTwo);

    const SoundKey = (e)=>{
        const filtro= data.find(el=> el.keyCode=== e.which)
        console.log(filtro.url);
        play(filtro.url)
        
    }

    const Cambiar = ()=>{
        if(data === BankOne){
            setData(BankTwo)
        }
        if(data=== BankTwo){
            setData(BankOne)
        }
    }
    
    return(
        <div onKeyDown={SoundKey}>
            <div id="drum-machine" > Hola mundo</div>
            <Teclado teclas={data} />
            <div id="display">
                <button onClick={Cambiar}>Bank</button>
            </div>
        </div>
    )
}
export default Machine;