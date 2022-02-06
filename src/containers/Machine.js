import React, { useEffect, useState } from 'react';
import Teclado from '../components/Teclado';
import { BankOne, BankTwo } from '../data/Data';

const Machine = ()=>{
    const [data,setData]= useState(BankTwo);

    useEffect(() => {
        document.addEventListener(`keydown`,e=>{

            const audio = document.getElementById(e.key.toLocaleUpperCase())
            if(audio !== null){
                audio.currentTime =0
                audio.play()
                const nombre = audio.getAttribute("title")
                document.getElementById("display").innerHTML=nombre
            }else{
                console.log("okq");
            }
        })
    }, []);
    
    
    
    const Cambiar = ()=>{
        if(data === BankOne){
            setData(BankTwo)
        }
        if(data=== BankTwo){
            setData(BankOne)
        }
    }
    
    return(
        <div id="drum-machine">
            <h1  > Caja de sonidos</h1>
            <Teclado teclas={data} />
            <div className='info'>
                <button className='Btninfo'
                 onClick={Cambiar}>Bank</button>
                <div id='display'></div>
            </div>
            
        </div>
    )
}
export default Machine;