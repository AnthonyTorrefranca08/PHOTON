import React, { useState } from "react";
import './Adjustment.css'
import InputRange from '../Input Range/InputRange'

export default function Adjustment ({title: title}){
    const [adj, setAdj] = useState ({
        brightness: 100,
        saturation: 150,
        vibrance: 125,
    })
return (
<section className='adjustmentWrapper'>
    <h1>{title}</h1>
        <section className="adjustContainer">
            <InputRange title="Brightness" value={adj.brightness}
                min={0} max={200}
                onChange={e=>{
                    const brightness = e.target.value;
                    setAdj(prev=>({
                        ...prev,
                        brightness: brightness,
                    }
                ))}
            }
            />

            <InputRange title="Saturation" value={adj.saturation}
                min={0} max={200}
                onChange={e =>{
                    const saturation = e.target.value;
                    setAdj(prev=>({
                        ...prev,
                        saturation: saturation,
                    }))
            }}/>

            <InputRange title="Vibrance" value={adj.vibrance}  
                min={0} max={200}
                onChange={e=>{
                    const vibrance = e.target.value;
                    setAdj(prev=>({
                        ...prev,
                        vibrance: vibrance,
                    }))
            }}
            />
    </section>

</section>
)
}